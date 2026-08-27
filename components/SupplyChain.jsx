'use client';
import {useState} from 'react';
export default function SupplyChain({lang}) {
 const ru=lang==='ru'; const [active,setActive]=useState(0);
 const stages=[
  {en:'Harvest',ru:'Сбор урожая',time:'24h',detail:ru?'Приёмка и отбор свежего сырья перед переработкой.':'Fresh raw material intake and selection before processing.'},
  {en:'Centrifuge De-watering',ru:'Центрифужное обезвоживание',time:'48h',detail:ru?'Отделение воды и контроль параметров продукта.':'Water separation and product specification checks.'},
  {en:'Aseptic Bulk Pack',ru:'Асептическая оптовая упаковка',time:'→',detail:ru?'Подготовка промышленной тары и маркировка партии.':'Industrial packing preparation and batch identification.'},
  {en:'Davao Reefer Loading',ru:'Погрузка в рефконтейнер в Давао',time:'✓',detail:ru?'Планирование рефрижераторной погрузки и контроля температуры.':'Reefer loading and temperature monitoring planning.'},
 ];
 return <section className="supply-chain glass-card rounded-xl" aria-labelledby="supply-heading">
  <div className="chain-heading"><div><span className="eyebrow text-gold-sand">{ru?'От сырья до порта':'Origin to port'}</span><h3 id="supply-heading" className="text-xl text-white font-bold mt-2">{ru?'Технологическая цепочка поставки':'Processing & logistics sequence'}</h3></div><div className="cold-status"><span aria-hidden="true" className="status-dot" />Cold Chain Status: Active / Monitored<span className="block text-xs text-gray-400 mt-1">{ru?'Модель процесса · не живая телеметрия':'Process model · not live telemetry'}</span></div></div>
  <ol className="chain-steps">{stages.map((s,i)=><li key={s.en} className={i===active?'is-active':''}><button type="button" aria-pressed={i===active} aria-controls="chain-detail" onClick={()=>setActive(i)}><span className="step-number">0{i+1}</span><span>{s[lang]}</span></button>{i<3&&<span className="chain-arrow" aria-hidden="true">{s.time} →</span>}</li>)}</ol>
  <div key={active} id="chain-detail" className="chain-detail" aria-live="polite"><strong className="text-gold-sand">0{active+1} / {stages[active][lang]}</strong><p>{stages[active].detail}</p></div>
  <p className="text-xs text-gray-400 mt-4">{ru?'24h и 48h — ориентиры технологической модели. Фактическое время зависит от продукта и партии.':'24h and 48h are process-model targets. Actual timing depends on the product and batch.'}</p>
 </section>;
}
