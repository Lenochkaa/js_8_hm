//таблица степеней
// for(let i = 1; i < 11; i++){
//     console.log(`Таблица степеней на ${i}`)
//     for(let j = 1; j < 10; j++){
//         console.log(`${i} ^ ${j} = ${i**j}`)
//     }
//     console.log("-------------")
// }

//ТАБЛИЦА УМНОЖЕНИЯ
// for(let i = Number(prompt('Введите число')); i < 11; i){
//     console.log(`Таблица умножения на ${i}`)
//     for(let j = 1; j < 10; j++){
//         console.log(`${i} * ${j} = ${i*j}`) 
        
//     }
//     console.log("-------------")
//     break;
// }


//y = x**2 , x = 1,2,3,..,n
// let step = 0
// let n = Number(prompt("Введите значение:"))
// for(let a = 1; a <= n; a++){
//     step=a**2
//     console.log(`${a} в квадрате равно ${step}`)
// }


//n = 1+2+3+4+..+n
// let sum = 0
// let n = Number(prompt("Введите значение:"))
// for(let a = 1; a <= n; a++){
//     sum+=a
// }
// console.log(sum)

//n = 1+3+5+7+..+n
let sum = 0
let n = Number(prompt("Введите значение:"))
for(let a = 1; a <= n; a+=2){
    sum = sum + a
}
console.log(sum)