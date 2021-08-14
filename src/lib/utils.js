export const formatMoney = val => {
  if( !val ) return '-'
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(val)
}
export const formatPercent = val => `${(val * 100.).toFixed(2)}%`
