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