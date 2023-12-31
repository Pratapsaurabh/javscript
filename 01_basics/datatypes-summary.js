//  primitive 

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const temp = null
let email
const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 10000000000n

//  Reference (Non primitive)

// Arrays, Objects, Functions
const heros = ["A", "B", "C"]

let myObj = {
    name: "sp",
    age: "24",
}

const myFunc = function() {
    console.log("hello")

}

// console.log(typeof id)


// https://262.ecma-international.org/5.1/#sec-11.4.3

// ======================================================>

let myName = "sp"
let anotherName = myName

anotherName = "Pr"
console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@gamil.com",
    pass: "1234"
}

let userTwo = userOne
userTwo.email = "sp@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)