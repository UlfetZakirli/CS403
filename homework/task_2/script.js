const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// 3.Remove first two numbers from arr1
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// 5.Remove four numbers in front of arr1(shift)


// let text = 'ulfat'

// text.replace('u', 'U')
// ////////////// TASK 6 //////////////
// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", 'Gulshen', "Fuad", "Anar"]
// const result = arr2.map(item => item.replaceAll('Gulshen', 'Rovshen'))
// const result2 = arr2.map(item => {
//     if (item === 'Gulshen') {
//         return item = 'Rovshen'
//     } else {
//         return item
//     }
// })

// let age = 17

// if (age >= 18) {
//     console.log(1);
// } else if (age === 20) {
//     console.log(2);
// } else {
//     console.log(3);
// }


// age >= 18 ?
//     console.log(1)
//     : age === 18 ? console.log(2) : console.log(3);

// age >= 18 ? console.log(1)
//     : age === 18 ? console.log(2)

// false && console.log('true');
// let age = 17;

// if (age >= 18) {
//     console.log(1);
// } else if (age === 20) {
//     console.log(2);
// } else {
//     console.log(3);
// }

// Ternary operator ?-if, :-else
// age >= 18 ? console.log(1) : age === 18 ? console.log(2) : console.log(3);
// age >= 18 ? console.log(1) : console.log(2);

// false && console.log('true');
// console.log(5 && 9 && null && 'undefined' && 9 && true && 'false');

// console.log(0 || undefined || null || 'undefined' || 9 || true || 'false');

// console.log(false && 77 || undefined && 0 || true && null || 'ulfat');



// Ternary operator ?-if, :-else


// console.log('result', result)
// console.log('result2', result2)
// 1.Console values from "Rufet" to "Fuad"
// 2.Change Gulshen to Rovshen 
// 3.Console each name with map
// 4.Console only names which is Anar
// 5.Console all names where name is Anar, then change it to "Perviz"
// 6.Console last second value of arr2
// 7.Console length of arr2



////////////// TASK 7 //////////////
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// 1.Show only numbers
// 2.Show only true values
// 3.Show only false values
// 4.Show only strings



////////////// TASK 8 //////////////
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)
// 2.Console (only odd numbers)


////////////// TASK 9 //////////////
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]

// 2.Sum all numbers of arr4
// 3.Count only the values that are true
// 4.Count only the values that are string
// 5.Count only the values that are false


////////////// TASK 10 //////////////
// 1.Create a object add your name, surname, age and city.
// 2.Then change name to "Jhon"

const obj = {
    email: 'ulfat@gmail.com',
    info: {
        gender: 'Male',
        loc: {
            city: "Baku",
            street: 'Nizami 22',
            education: {
                "uni name": "ADNSU",
            }
        }
    }
}

// 3.Console gender
// 4.Console city

////////////// TASK 11 //////////////

// let fullName = 'Ulfat Zakirli Rovshen'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
// 3) Alinan yeni arrayi stringe cevirin(join)


let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// console.log(arr.filter(item => item === 5).length);

// let count = 0
// arr.map((item) => {
//     if (item === 5) {
//         count++
//     }
// })
// console.log('count', count)
// let result = arr.reduce((acc, prev) => prev === 5 ? ++acc : acc, 0)
// console.log('result', result)
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
//6) arrayda tekrar olunan reqemleri artan sira ile duzun
// console.log([...new Set(arr)]);
// console.log(Array.from(new Set(arr)));
// console.log(arr.filter((item, index, innerArr) => innerArr.indexOf(item) === index));
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
let nameLength = 'Ibrahim'.length
console.log(arr.includes(nameLength));

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
//10) arraydaki en boyuk reqemin ilk indexini tapin
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
//14) 7 reqeminin indexleri cemini tapin.

// let a = 8
// let b = a
// b = 9
// console.log('a', a)
// console.log('b', b)

// const obj1 = {
//     age: 33
// }

// const obj2 = {...obj1}
// obj2.age = 24
// console.log('obj1', obj1)
// console.log('obj2', obj2)

// console.log(typeof null);
// console.log(typeof undefined);


// console.log(Number(null));
// console.log(Number(undefined));

// let page = null
// console.log(page);
// falsy: 0, '', NaN, undefined, false, null

// if (-3243243243243) {

// }
///////////// TASK 12//////////////

let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]


//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
// let result = arr2.filter((item) => item.name.toLowerCase().split('t').length - 1 === 2)
// console.log('result', result)

// // undefined,null,0,false,'',NaN

// console.log('referance'.split('e').length - 1);

// console.log('UTlfat'.match(/t/g));