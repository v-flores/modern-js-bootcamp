let temp = 150

// Logical And Operator - True if both sides are true, false otherwise 
// Logical Or Operator - True if at least one side is true, False otherwise
if (temp >= 60 && temp <=90){
    console.log('It is pretty nice out')
} else if (temp <=0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Eh. Whatever')
}

// Challenge Area
// Are both vegan? Only offer up vegan dishes
// at least one vegan? 

let isGuestOneVegan = true
let isGuestTwoVegan = false

// my answer 
if (isGusetOneVegan = true){
    console.log('Here is a Vegan Menu')
} else if (isGuestTwoVegan = true){
    console.log("Here is a vegan menu")
} else{
    console.log('Here are regular menus')
}

// correct answer
if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Only off up vegan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some vegan options')
} else {
    console.log('Offer up everything on the menu')
}