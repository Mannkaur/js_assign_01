let myArr=[]
let myVal= process.argv
let mealCost=myArr.push(Number(myVal[2]))
let tipPercent= myArr.push(Number(myVal[3]))
let tipAmount=myVal[3]/100*myVal[2]
const totalOwing= Number(myVal[2])+tipAmount
const output=`Your meal was$${Number(myVal[2])} + a ${Number(myVal[3])}%tip = $${totalOwing}`
console.log(output)