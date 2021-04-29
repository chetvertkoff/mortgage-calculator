
//toNum
function toNum(num:number): number
function toNum(num:string): number
function toNum(num:string): unknown
function toNum(num: any): any {
  if(!num) return num
  if (typeof num == 'number') return num
  return +num.replace(/ /g,'')
}
//formatNum
function formatNum(num: number): string|unknown {
  if (!num) return num
  return num.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
}
//shortNumCurrency
function shortNumCurrency( num: number): string
function shortNumCurrency( num: number): number
function shortNumCurrency( num: number): unknown
function shortNumCurrency (num: any): any {
  if(!num) return num
  const arr = num
    .toString()
    .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    .split(' ')
  if(arr.length == 1) return num
  if(arr.length == 2) return `${arr[0]} тыс ₽.`
  return `${arr[0]} млн ₽.`
}

export { shortNumCurrency, formatNum, toNum }
