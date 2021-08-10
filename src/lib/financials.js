
export const compound = (length, initial, rate) => {
  let acc = initial / (1 + rate), res = []
  while (length--) {
    acc *= 1. + rate
    res.push(Math.round(acc))
  }
  return res
}
