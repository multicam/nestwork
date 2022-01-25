// FUNCTIONS
export const sum = arr => arr.reduce((r,i) => r+i, 0)
export const compound = (length, initial, rate) => {
  let acc = initial / (1 + rate), res = []
  while (length--) {
    acc *= 1. + rate
    res.push(Math.round(acc))
  }
  return res
}

export const aggregate = arr => arr.map((i,n) => {
  let t=0
  for(let k=0; k<=n; ++k) t += arr[k]
  return t
})
// TAX POSITION CALCULATOR

const taxBracket = [
  {
    max: 18200,
    bt: 0,
    rn: 0
  },
  {
    min: 18201,
    max: 45000,
    bt: 0,
    rn: .19
  },
  {
    min: 45001,
    max: 120000,
    bt: 5092,
    rn: .325
  },
  {
    min: 120001,
    max: 180000,
    bt: 29467,
    rn: .37
  },
  {
    min: 180001,
    bt: 51667,
    rn: .45
  }
]

export const calculateTaxes = val => {
  if(!val) return {}

  const last = taxBracket.slice(-1)[0]
  const first = taxBracket[0]

  if( val < first.max ) {
    return {
      bracket: first,
      amount: val * first.rn
    }
  }

  if( val > last.min ) {
    return {
      bracket: last,
      amount: last.bt + ( val - last.min - 1 ) * last.rn
    }
  }

  const res = taxBracket.find( i => val <= i.max && val >= i.min )
  return {
    bracket: res,
    amount: res.bt + ( val - res.min - 1 ) * res.rn
  }

}

// LOAN CALCULATOR

export const calculateLoan = (amount,params) => {
  const months = params.durationYears, rate = params.rate
  return amount*(rate * Math.pow((1 + rate), months))/(Math.pow((1 + rate), months) - 1);
}
