// Planning assumptions, not certified packing specifications or a freight quote.
export const PRODUCTS = [
  {id:'vco',en:'Virgin Coconut Oil',ru:'Кокосовое масло VCO',packs:[{id:'drum-200',en:'200 L drum',ru:'Бочка 200 л',kg:182},{id:'ibc-1000',en:'1,000 L IBC',ru:'IBC 1 000 л',kg:910}],assumption:{en:'Oil density assumed at 0.91 kg/L.',ru:'Принята плотность масла 0,91 кг/л.'}},
  {id:'bananas',en:'Cavendish Bananas',ru:'Бананы Кавендиш',packs:[{id:'box-13.5',en:'13.5 kg carton',ru:'Коробка 13,5 кг',kg:13.5}]},
  {id:'mango',en:'Dried Carabao Mango',ru:'Сушёное манго Карабао',packs:[{id:'box-20',en:'20 kg master carton',ru:'Мастер-короб 20 кг',kg:20}]},
  {id:'cacao',en:'Fine Cacao Beans',ru:'Какао-бобы',packs:[{id:'bag-25',en:'25 kg bag',ru:'Мешок 25 кг',kg:25},{id:'bag-50',en:'50 kg bag',ru:'Мешок 50 кг',kg:50}]},
  {id:'coco-peat',en:'Coco Peat Substrate',ru:'Кокосовый субстрат',packs:[{id:'block-5',en:'5 kg compressed block',ru:'Прессованный блок 5 кг',kg:5}]},
  {id:'water',en:'Coconut Water',ru:'Кокосовая вода',packs:[{id:'drum-200',en:'200 L aseptic drum',ru:'Асептическая бочка 200 л',kg:200}],assumption:{en:'Water density assumed at 1 kg/L.',ru:'Принята плотность 1 кг/л.'}},
  {id:'sugar',en:'Cane & Coconut Sugar',ru:'Тростниковый и кокосовый сахар',packs:[{id:'bag-25',en:'25 kg bag',ru:'Мешок 25 кг',kg:25},{id:'bag-50',en:'50 kg bag',ru:'Мешок 50 кг',kg:50}]},
];
export const DESTINATIONS = [
  {id:'davao',terms:'FOB Davao',en:'Davao, Philippines',ru:'Давао, Филиппины'},
  {id:'vladivostok',terms:'CIF Vladivostok',en:'Vladivostok, Russia',ru:'Владивосток, Россия'},
  {id:'dubai',terms:'CIF Dubai',en:'Dubai (Jebel Ali), UAE',ru:'Дубай (Джебель-Али), ОАЭ'},
  {id:'shanghai',terms:'CIF Shanghai',en:'Shanghai, China',ru:'Шанхай, Китай'},
];
export function estimateBatch(productId,packId,quantity) {
  const product=PRODUCTS.find(p=>p.id===productId);
  const pack=product?.packs.find(p=>p.id===packId);
  const count=Number(quantity);
  if(!pack || !Number.isInteger(count) || count<1 || count>100000) return null;
  return {netKg:Math.round(pack.kg*count*100)/100,unitKg:pack.kg,count,leadDaysMin:7,leadDaysMax:14};
}
