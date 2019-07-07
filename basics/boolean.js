// === equality operator
// !== not equal operator
// < less than operator
// > greater than operator 
// <=  less than or equal to operator
// >= greater than or equal to operator



let temp = 110
let isFreezing = temp < 32 

console.log(isFreezing)

if (isFreezing) {
    console.log('It is freezing outside!')    
}
if (temp >= 110 ){
    console.log('It is HOT')
}


// Challenge Area

// Create age set to your age
// Calculate is child - if they are 7 or under
// Calculate is senior - if they are 65 or older
// print is child value
// print is senior value

let myAge = 30
let isChild = myAge <= 7
let isSenior = myAge >= 65

console.log(isChild)
console.log(isSenior)



//if 7 or under print child pricing
// if 65 or older print message about senior discount

let age = 65
childAge = age <= 7
seniorAge = age >= 65
if (childAge){
    console.log('You aretoo old for the child discount')
}
if (seniorAge){
    console.log('You get $10 off admission')
}
