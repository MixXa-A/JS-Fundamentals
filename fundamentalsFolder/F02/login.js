function login (input){
let index = 0;
let username = String(input[index])
index++
let password = ``
let passwordGuess = input[index]
let trysToLogIn = 0;


for (let i = username.length-1; i>=0; i--){
    let usernameLetter = username[i]
    password+=usernameLetter
   
}

while(passwordGuess !== password ){
     trysToLogIn++
    if (trysToLogIn === 4){
        console.log(`User ${username} blocked!`)
        break;
    }
    if (passwordGuess !== password){
        console.log(`Incorrect password. Try again.`)
    }
  
  
  index++
  passwordGuess = input[index]
}

if (passwordGuess===password){
    console.log(`User ${username} logged in.`)
}

}
login(['sunny','rainy','cloudy','sunny','not sunny'])