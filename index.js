// console.log(`Hello World!`)

let backPack = []

backPack.push(`sword`, `shield`, `food`)

// let sword = backPack.shift()
let sword = backPack.splice(0, 1)

// backPack.unshift(sword)

let furCoat = `fur coat`

backPack.push(furCoat)

backPack.pop()

backPack.push(`flint`, `blanket`, `knife`, `toothbrush`,)

let itemCount = backPack.length

let backPack2 = backPack.splice(2, 3)

// console.log(backPack)
// console.log(backPack2[0])

// for(let i = 0; i < backPack.length; i++){
// console.log(backPack[i])
// }

// for(let i = 0; i < backPack2.length; i++){
//     console.log(backPack2[i])
// }

// if(backPack.length >= 3){
//     for(let i = 0; i < backPack[i]; i++){
//     console.log(backpack[i])
// }
// }
// else {
//     for(let i = 0; i < backPack.length; i++){
//         console.log(backPack[i])
//     }
// }


// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log(`-----------`, guessMe)
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log(`guessMe is divisible by 4 or 5. Added 25`)
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        console.log(`guessMe is divisible by 3. Subtracted 27`)
        guessMe -= 27
    } else {
        console.log(`Added 3`)
        guessMe += 3
    }
    guessMe += 22
    
}

// this is a comment