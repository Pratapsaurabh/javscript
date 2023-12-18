const name = "sp"
const age = 24

// console.log(name + age + "value")  // outdated method

console.log(`hello ${name} your age is ${age}`)

// another way to initialize string 
const myStr = new String('spsingh')
console.log(typeof myStr) // object (it will show in key value pair)

console.log(myStr.toUpperCase())

console.log(myStr.charAt(2));
console.log(myStr.indexOf('p'));

const newString = myStr.substring(0, 4) // can't give -ve value in index

console.log(newString)

const anotherString = myStr.slice(-6, 4)
console.log(anotherString)

// Trim()
// will remove unwanted space 
const newStringOne = "  sp  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://sp.com/sp%20singh";
console.log(url.replace('%20', '-'))
console.log(url.includes('bat'))

const varString = "sp-singh"
console.log(varString.split('-')) // will split and make an array

