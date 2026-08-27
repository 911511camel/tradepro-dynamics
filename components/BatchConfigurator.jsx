'use client';
import {useState} from 'react';
import {PRODUCTS,DESTINATIONS,estimateBatch} from '../lib/batch-config';
import {openModal} from '../lib/site-interactions';
export default function BatchConfigurator({lang}) {
  const ru=lang==='ru';
  const [productId,setProduct]=useState('vco');
  const product=PRODUCTS.find(p=>p.id===productId);
  const [packId,setPack]=useState(product.packs[0].id);
  const [quantity,setQuantity]=useState('80');
  const [port,setPort]=useState('davao');
  const estimate=estimateBatch(productId,packId,quantity);
  const pack=product.packs.find(p=>p.id===packId);
  const destination=DESTINATIONS.find(p=>p.id===port);
  const number=n=>new Intl.NumberFormat(ru?'ru-RU':'en-US',{maximumFractionDigits:2}).format(n);
  function request(event) {
    event.preventDefault(); if(!estimate) return;
    const form=document.querySelector('#quote-modal form');
    const fields={product:product[lang],productId,packaging:packId,packageCount:quantity,
      estimatedWeightKg:String(estimate.netKg),leadTime:'7–14 days',country:destination[lang],
      incoterms:destination.terms,volume:`${quantity} × ${pack[lang]} · ${number(estimate.netKg)} kg (net estimate)`};
    for(const [name,value] of Object.entries(fields)) form.elements[name].value=value;
    document.getElementById('quote-config-summary').textContent=`${product[lang]} · ${fields.volume} · ${destination.terms} · ${ru?'Формирование':'Lead time'}: 7–14 ${ru?'дней':'days'}`;
    openModal('quote-modal');
  }
  return <form id="calculator-form" onSubmit={request} className="batch-config">
    <div className="config-grid">
      <label htmlFor="calc-product"><span>01 / {ru?'Товар':'Product'}</span><select id="calc-product" value={productId} onChange={e=>{setProduct(e.target.value);setPack(PRODUCTS.find(p=>p.id===e.target.value).packs[0].id);}}>{PRODUCTS.map(p=><option key={p.id} value={p.id}>{p[lang]}</option>)}</select></label>
      <label htmlFor="calc-pack"><span>02 / {ru?'Тара':'Packaging'}</span><select id="calc-pack" value={packId} onChange={e=>setPack(e.target.value)}>{product.packs.map(p=><option key={p.id} value={p.id}>{p[lang]}</option>)}</select></label>
      <label htmlFor="calc-count"><span>{ru?'Количество упаковок':'Package count'}</span><input id="calc-count" type="number" min="1" max="100000" step="1" required value={quantity} onChange={e=>setQuantity(e.target.value)} aria-describedby="estimate-assumptions" /></label>
      <label htmlFor="calc-port"><span>03 / {ru?'Порт и Incoterms':'Port & Incoterms'}</span><select id="calc-port" value={port} onChange={e=>setPort(e.target.value)}>{DESTINATIONS.map(d=><option key={d.id} value={d.id}>{d.terms} — {d[lang]}</option>)}</select></label>
    </div>
    <div className="estimate-panel" aria-live="polite" aria-atomic="true">
      <div><span className="eyebrow">{ru?'Ориентировочный вес нетто':'Estimated net weight'}</span><div className="metric-value text-gold-sand">{estimate?number(estimate.netKg/1000):'—'} <span className="text-lg">{ru?'т':'MT'}</span></div><p>{estimate?`${number(estimate.count)} × ${number(estimate.unitKg)} kg = ${number(estimate.netKg)} kg`:ru?'Введите целое количество от 1 до 100 000.':'Enter a whole number from 1 to 100,000.'}</p></div>
      <div><span className="eyebrow">{ru?'Формирование судовой партии':'Vessel batch lead time'}</span><div className="metric-value text-emerald-accent">7–14 <span className="text-lg">{ru?'дней':'days'}</span></div><p>{ru?'Не включает морской транзит и таможню.':'Excludes ocean transit and customs.'}</p></div>
      <button type="submit" disabled={!estimate} className="config-submit">{ru?'Запросить условия партии':'Request batch quotation'} <span aria-hidden="true">↗</span></button>
    </div>
    <p id="estimate-assumptions" className="text-xs text-gray-400 mt-4">{ru?'Плановая оценка: вес упаковки и паллет не включён.':'Planning estimate: packaging and pallet tare excluded.'} {product.assumption?.[lang]} {ru?'Тара, плотность, срок 7–14 дней и доступность маршрута требуют подтверждения отдела экспорта. Это не расчёт фрахта и не гарантия отгрузки.':'Packaging, density, the 7–14 day window and route availability require export-desk confirmation. This is not a freight quote or shipment guarantee.'}</p>
  </form>;
}
