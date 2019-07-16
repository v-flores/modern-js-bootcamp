// function - input (argument), code , output(return value)

let greetUser = function(){
    console.log('Welcome User!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)


// Challenge
// convertFahrenheitToCelsius 
// call a couple of times

let convertFahrenheitToCelsius = function(fahrenheit){
    let celsius = ( fahrenheit - 32 ) * 5 / 9
    return celsius
}

let conversion = convertFahrenheitToCelsius(32)
let conversion2 = convertFahrenheitToCelsius(64)

console.log(conversion)
console.log(conversion2)