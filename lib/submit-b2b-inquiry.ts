export interface B2BInquiry {
  name: string; email: string; company: string; product: string;
  volume: string; incoterms: string; country?: string;
}
export async function submitLead(payload: Record<string, string>) {
  const response = await fetch('/api/leads', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload), signal: AbortSignal.timeout(15000),
  });
  const result = await response.json() as {success?: boolean; error?: string};
  if (!response.ok || !result.success) throw new Error(result.error || 'Unable to submit inquiry.');
  return result;
}
export function submitB2BInquiry(form: B2BInquiry) {
  return submitLead({leadType:'b2b-export', fullName:form.name, corporateEmail:form.email,
    companyName:form.company, product:form.product, volume:form.volume,
    incoterms:form.incoterms, country:form.country || ''});
}
