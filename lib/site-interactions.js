    export function filterCoconut(category) {
      const cards = document.querySelectorAll('#coconut-grid > div');
      const buttons = document.querySelectorAll('.coco-btn');

      buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
          btn.className = "coco-btn px-3 py-1.5 text-xs rounded bg-emerald-bio text-white font-mono";
        } else {
          btn.className = "coco-btn px-3 py-1.5 text-xs rounded glass-card text-gray-300 font-mono hover:text-white";
        }
      });

      cards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        if (category === 'all' || cat.includes(category)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }


let previousFocus;
export function openModal(id) {
  previousFocus = document.activeElement;
  const modal = document.getElementById(id);
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  modal.querySelector('input:not([type="hidden"]),button')?.focus();
}
export function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
  document.body.style.overflow = '';
  previousFocus?.focus();
}
export function handleModalKeyDown(event) {
  if(event.key === 'Escape') closeModal(event.currentTarget.id);
  if(event.key !== 'Tab') return;
  const items = [...event.currentTarget.querySelectorAll('button:not(:disabled),input:not([type="hidden"]),select')];
  const first = items[0], last = items.at(-1);
  if(event.shiftKey && document.activeElement === first){event.preventDefault();last?.focus();}
  else if(!event.shiftKey && document.activeElement === last){event.preventDefault();first?.focus();}
}
export function selectProductForQuote(product) {
  const form = document.querySelector('#quote-modal form');
  form.elements.product.value = product;
  form.elements.volume.value = '';
  form.elements.incoterms.value = '';
  for (const key of ['productId','packaging','packageCount','estimatedWeightKg','leadTime']) form.elements[key].value='';
  document.getElementById('quote-config-summary').textContent='';
  openModal('quote-modal');
}
export function openInvestorModal(projectName) {
  const modal = document.getElementById('investor-modal');
  modal.dataset.projectName = projectName;
  document.getElementById('investor-project-title').textContent = projectName + ' // Data Room Access';
  openModal('investor-modal');
}
export async function handleGenericSubmit(event, modalId) {
  event.preventDefault();
  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  if(button.disabled) return;
  const status = form.querySelector('[data-submit-status]');
  const ru = document.documentElement.lang === 'ru';
  const fields = Object.fromEntries(new FormData(form));
  button.disabled = true;
  status.textContent = ru ? 'Отправка…' : 'Sending…';
  try {
    const {submitLead, submitB2BInquiry} = await import('./submit-b2b-inquiry');
    if(modalId === 'quote-modal') {
      await submitB2BInquiry({name:fields.fullName,email:fields.corporateEmail,company:fields.companyName,
        product:fields.product,volume:fields.volume,incoterms:fields.incoterms,country:fields.country,productId:fields.productId,packaging:fields.packaging,packageCount:fields.packageCount,estimatedWeightKg:fields.estimatedWeightKg,leadTime:fields.leadTime});
    } else {
      await submitLead({...fields,leadType:modalId === 'investor-modal' ? 'ppp-investor' : 'csr-intake',
        ...(modalId === 'investor-modal' ? {projectName:document.getElementById(modalId).dataset.projectName} : {})});
    }
    status.textContent = ru ? 'Заявка отправлена.' : 'Inquiry submitted.';
    form.reset();
  } catch {
    status.textContent = ru ? 'Заявка не отправлена. Сервис недоступен; попробуйте позже.' : 'Inquiry not sent. Service unavailable; please try again later.';
  } finally { button.disabled = false; }
}

export function clearBatchEstimate(){
 const form=document.querySelector('#quote-modal form');
 for(const key of ['productId','packaging','packageCount','estimatedWeightKg','leadTime']) form.elements[key].value='';
 document.getElementById('quote-config-summary').textContent='';
}
