function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
}
console.log(cToF(25));