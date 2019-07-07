let isAccountLocked = false
let userRole = 'user'



if (isAccountLocked){
    console.log('Is Account locked')
} else if (userRole === 'admin') {
    console.log('Welcome admin')
} else {
    console.log('Welcome')
}


//challenge area

let temp = 46

// it is freezing outside
// it is hot outside
// go for it. it is pretty nice

if (temp < 45){
    console.log('It is freezing outside')
} else if (temp > 45) {
    console.log('it is hot outside ')
} else{
    console.log('go for it')
}