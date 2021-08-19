
const {log} = console, {pow} = Math

const principal = 400000
const rate = 0.065
const months = 360

const currency = val => new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0
}).format(val)

const monthlyPayment = (p, n, i) => p * i * (pow(1 + i, n)) / (pow(1 + i, n) - 1)

log('--- principal',currency(principal))
log('--- monthly', currency(monthlyPayment(principal,months,rate/12)))
log('---', new Date().toLocaleDateString(), new Date().toLocaleTimeString())

//
