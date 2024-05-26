// loop (for, for_of,for_in)




// let a = 6
// console.log(a);
// a++
// ++a

// a--
// --a


// a = a + 1
// a += 1
// console.log(a);

// sum+=item  // sum=sum+item
// sum*=item  //  sum=sum*item

// let a = 8
// console.log(a++);
// console.log(++a);



// let user = 'Ulfat'
// console.log(user.split(''));

// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }

// console.log('   ');


// user.split('').map(item => console.log(item))

// // console.log(user[5]);


// split(''):  String to Array
// join(''):   Array to String


// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// for (let i = students.length - 1; i >= 0; i--) {
//     console.log(students[i]);
// }


// for (let i = 0; i < students.length; i++) {
//     if (students[i].length === 5) {
//         console.log( students[i]);
//     }else{
//         console.log('name is too longer');
//     }
// }


// for (let student of students) {
//     console.log(student);
// }

// let user = ''

// const obj = {
//     id: 1,
//     name: 'Isa',
//     age: 19,
//     gender: 'male'
// }
// console.log(obj['id']);

// for (let key in obj) {
//     console.log(obj[key]);
// }


// for,for_of - String,Array
// for_in - Object


//  while/do_while
// switch,

// for (; i <= 20;) {
//     i += 5
//     if (i == 15) {
//         break;
//     }
//     console.log('i', i)
// }
// console.log(' ');

// let j = 0
// while (j <= 20) {
//     j += 5
//     console.log('j', j)
// }

// let a = 1
// do {
//     a += 2
//    console.log('a', a)
// } while (a > 10);

// console.log(' ');

// let b = 0
// while (b > 10) {
//     b += 2
//     console.log('b', b)
// }




// if (a > 10) {
//     console.log(1);
// } else if (a === 7) {
//     console.log(2);
// } else if (a === 17) {
//     console.log(3);
// } else if (a < 7) {
//     console.log(4);
// } else {
//     console.log(5);
// }


// a > 10 ? console.log('if') : console.log('else');

// let a = 8
// switch (a) {
//     case 7:
//         console.log('1');
//         break
//     case 4:
//         console.log('2');
//     case 99:
//         console.log('3');
//         break
//     case 0:
//         console.log('4');
//         break;
//     default:
//         console.log('default');
//         break
//     case 7:
//         console.log('5');
// }

// switch (true) {
//     case a > 7:
//         console.log(1);
//         break;
//         console.log(2);
//     default:
//         break;
// }

// forEach, match, reduce, reduceRight, flat, concat,some,every

// students.map(item => console.log(item))
// students.forEach(item => console.log(item))


// const main = document.querySelector('#myDiv')

// users.forEach(item => {
//     const container = document.createElement('div')
//     const name = document.createElement('h4')
//     const age = document.createElement('p')
//     const gender = document.createElement('p')
//     const hr = document.createElement('hr')
//     name.innerHTML = item.name;
//     age.innerHTML = item.age
//     gender.innerHTML = item.gender
//     container.append(name, age, gender, hr)
//     main.append(container)
// })


// const numbers = [4, 6, 8, false, true, 'ulfat', 9, 10]

// let sum = 0
// numbers.map(item => sum += item)
// console.log('sum', sum)

// let result = numbers.reduce((sum, prev) => sum + prev, 0)
// console.log('result', result)

// const arr = [[1, [2, [3]]], [4, [[[[[[[[[[[[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]]]]]]]]], 6]]


// console.log(arr.flat(Infinity));


// slice,indexOf,concat - both string and array methods

// let text1 = 'Code'
// let text2 = 'Academy'

// console.log(text1 + ' ' + text2);
// console.log(`${text1} ${text2}`);
// console.log(text1.concat(' ', text2,' CS403',));

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// console.log(arr1.concat(arr2, 7, 8, true, [6, 8], { name: 'ulfat' }, false, undefined, null));


// const arr = [13, 5, 8, 9, 4, 11, 33, 13]
// console.log(arr.some(item => item < 4));
// console.log(arr.every(item => item >= 4));


// console.log(students.filter(item => typeof item === 'string' && item.match(/[a-z]/gi)));


// splice, reverse, sort, pop, push, shift, unshift



// let arr = ['b', 'a', 'c', 'd', 'e']
// arr.toReversed()
// console.log(arr.toReversed());
// arr.reverse()
// console.log(arr.slice(2, 4));
// console.log(arr);


// Task 
// const students = ['Ibrahim', 'Aysu', 'Tural', '9', 0, true, undefined, 'Isa', 'Elmir', 'Ferhad', 'Ramil']

// 1.Loop values of students (for)
// 2.Loop values of students (for_of)
// 3.Loop only strings values of studens (for)
// 4.Loop only number values of studens (for_of)
// 5.Loop only true values of studens (for)

const numbers = [4, 7, 8, 12, 22, 9, 12]
// 6.Loop only even values of numbers (for)
// 7.Loop only odd values of numbers (for_of)
// 8.Sum values of numbers (for)
// 9.Mult values of numbers (for_of)
// 10.Show all values except 12 (for/continue)
// 11.Sum values of numbers (reduce)

const users = [
    {
        id: 1,
        name: 'Isa',
        age: 19,
        gender: 'male'
    },
    {
        id: 2,
        name: 'Aysu',
        age: 20,
        gender: 'female'
    },
    {
        id: 4,
        name: 'Ramil',
        age: 13,
        gender: 'male'
    },
    {
        id: 5,
        name: 'Tural',
        age: 33,
        gender: 'male'
    },
    {
        id: 6,
        name: 'Ayxan',
        age: 25,
        gender: 'male'
    },
]

// 12.Sum age of users (reduce)
// 13.Mult age of users (reduce)

const user = {
    id: 1,
    name: 'Elnur',
    surname: 'Elnurlu',
    age: 19
}
// 14.Console keys of user(for_in)
// 14.Console values of user(for_in)




