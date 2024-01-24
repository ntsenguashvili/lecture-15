//task1- loop

for (let i = 0; i < 100; i++) {
    console.log(i)
}

//task2 - while
let i = 0
while (i < 50) {
    console.log(i)
    i++
}

//task3 - array

let names = ["natia1", "natia2", "natia3", "natia4", "natia5"]
console.log(names)

console.log(names.push("natia6"), names)

console.log(names.pop(), names)

console.log(names.shift(), names)

console.log(names.unshift("natia7"), names)

//task4 - loop

let x = []

for (let i = 1; i < 10000; i++) {
    x.push(i * i)
}
console.log(x)

//task5 - for
let numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]
}
console.log(`sum is ${sum}`)

//task6 - function

function isEven(num) {
    if (num % 2 === 1) {
        return false
    }
    else {
        return true
    }

}

for (i=100; i<115; i++){
    console.log(i,isEven(i))
}

//task7 - upper-lower

function convertToLower(input){
    return input.toLowerCase()
}

console.log(convertToLower("MY NAME IS JOHN"))

//task8 - filter
const result = x.filter((xItemValue) => isEven(xItemValue));

console.log(result)