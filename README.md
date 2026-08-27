# TradePro Dynamics Corp.

Интеграция четырех исходных файлов: HTML преобразован в React, OreProcessingFlow размещён в инвестиционном разделе, B2B helper подключён к форме и калькулятору, API обслуживает экспортные, инвестиционные и CSR-заявки.

## Запуск

Node.js >=22.13; `npm ci`, затем `npm run dev`.
Проверки: `npm run build`, `npm test`, `npx tsc --noEmit`.

## CRM

Скопируйте `.env.example` в `.env` и задайте `CRM_B2B_WEBHOOK_URL`, `CRM_INVESTOR_WEBHOOK_URL`, `CRM_CSR_WEBHOOK_URL` — адрес собственного серверного адаптера CRM. Он получает JSON с полями `title`, `pipeline`, `department`, `assigned_team`, `contact`, `custom_fields`. Прямой API HubSpot/Bitrix24 может требовать отдельного адаптера и авторизации.

Без настройки API возвращает 503; форма не сообщает об успешной отправке. Успех означает HTTP 2xx от адаптера. Письма автоматически не отправляются; адреса департаментов из исходника остаются справочной конфигурацией. Перед публичным запуском добавьте защиту от спама, политику обработки персональных данных и проверьте коммерческие, правовые и количественные утверждения из исходного HTML. Языковые страницы `/en/` и `/ru/` отдаются сервером с canonical/hreflang, JSON-LD, sitemap и языком HTML. Выбор языка сохраняется cookie; ссылки на разделы остаются в выбранной локали.

Конфигуратор рассчитывает ориентировочный вес нетто = количество упаковок × вес единицы. Допущения хранятся в `lib/batch-config.js`: VCO 0,91 кг/л, вода 1 кг/л, остальные упаковки по указанному весу. Тара и паллеты не включены; фрахт, реальная загрузка контейнера и транзит не рассчитываются. Срок 7–14 дней — ориентир формирования партии, требует подтверждения. Cold Chain Status обозначает модель процесса, не телеметрию.

## GitHub and Cloudflare deployment

The application runs on Cloudflare Workers (including `/api/leads`), not static GitHub Pages.
`wrangler.jsonc` serves `tradepro-ph.com` and `www.tradepro-ph.com` as Worker Custom Domains. Canonical URLs use `https://tradepro-ph.com`. The previous `tradepro.niko.center` hostname remains available during DNS propagation. Mail and legacy hosting subdomains are preserved.

After `npx wrangler login`, run `npm run deploy`. It builds the app and deploys the generated `dist/server/wrangler.json`, including all client assets. For a validation-only upload, run `npm run deploy:check`.

Set the server-only CRM endpoint with `npx wrangler secret put CRM_B2B_WEBHOOK_URL --config dist/server/wrangler.json` after building. Never put credentials in source control. Without this secret the site can run, but inquiry delivery returns HTTP 503.

GitHub automation can run `npm ci`, `npx tsc --noEmit`, `npm test`, `npm run build`, then `npx wrangler deploy --config dist/server/wrangler.json`. Supply `CLOUDFLARE_ACCOUNT_ID` and a scoped `CLOUDFLARE_API_TOKEN` through GitHub Actions secrets; do not commit them.

Вебхуки разделены строго: B2B → коммерческий департамент Давао; Investor → дирекция инвестиций и ГЧП; CSR → гуманитарный координационный центр. При отсутствии конкретного вебхука возвращается 503 без отправки в другой отдел. Общий CRM_WEBHOOK_URL больше не используется API. Повторите команду wrangler secret put для каждого из трёх ключей.

JSON-LD использует только адрес и каталог исходного сайта; цены, рейтинги, координаты и право собственности на порты не выдумываются. Разметка Product без коммерческих предложений не гарантирует расширенный сниппет Google.
