# TradePro Dynamics Corp.

Интеграция четырех исходных файлов: HTML преобразован в React, OreProcessingFlow размещён в инвестиционном разделе, B2B helper подключён к форме и калькулятору, API обслуживает экспортные, инвестиционные и CSR-заявки.

## Запуск

Node.js >=22.13; `npm ci`, затем `npm run dev`.
Проверки: `npm run build`, `npm test`, `npx tsc --noEmit`.

## CRM

Скопируйте `.env.example` в `.env` и задайте `CRM_WEBHOOK_URL` — адрес собственного серверного адаптера CRM. Он получает JSON с полями `title`, `pipeline`, `department`, `assigned_team`, `contact`, `custom_fields`. Прямой API HubSpot/Bitrix24 может требовать отдельного адаптера и авторизации.

Без настройки API возвращает 503; форма не сообщает об успешной отправке. Успех означает HTTP 2xx от адаптера. Письма автоматически не отправляются; адреса департаментов из исходника остаются справочной конфигурацией. Перед публичным запуском добавьте защиту от спама, политику обработки персональных данных и проверьте коммерческие, правовые и количественные утверждения из исходного HTML. EN/RU сохранены в объёме исходного словаря; часть форм и схема содержат исходный смешанный текст.

Калькулятор переносит параметры в заявку, но не рассчитывает цены или загрузку: исходник не содержал таких формул.

## GitHub and Cloudflare deployment

The application runs on Cloudflare Workers (including `/api/leads`), not static GitHub Pages.
`wrangler.jsonc` targets `tradepro.niko.center` as a Worker Custom Domain. The Cloudflare account must control the active `niko.center` zone. Check existing DNS records before deployment; do not overwrite an existing service without confirmation.

After `npx wrangler login`, run `npm run deploy`. It builds the app and deploys the generated `dist/server/wrangler.json`, including all client assets. For a validation-only upload, run `npm run deploy:check`.

Set the server-only CRM endpoint with `npx wrangler secret put CRM_WEBHOOK_URL --config dist/server/wrangler.json` after building. Never put credentials in source control. Without this secret the site can run, but inquiry delivery returns HTTP 503.

GitHub automation can run `npm ci`, `npx tsc --noEmit`, `npm test`, `npm run build`, then `npx wrangler deploy --config dist/server/wrangler.json`. Supply `CLOUDFLARE_ACCOUNT_ID` and a scoped `CLOUDFLARE_API_TOKEN` through GitHub Actions secrets; do not commit them.
