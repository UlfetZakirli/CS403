// Strings

// let b = ['ulfat', 'zakirli']
// console.log(b[0]);
// console.log(b.length);
// console.log(b.length);
// console.log(a.length);
// console.log(a.toLowerCase());
// console.log(a.toLocaleLowerCase());

// console.log(a.toUpperCase());
// console.log(a.toLocaleUpperCase());



// console.log(a[0]);
// console.log(a[a.length - 1]);
// console.log(a.at(-1));

// let check = 'U'

// console.log(a.toLowerCase().startsWith(check.toLowerCase()));
// console.log(a.endsWith('Q'));

// let a = 'elshen elshenli sahib'
// const list = a.split(' ')
// console.log(list[0]);
// console.log(a.includes('y'));
// console.log(a.indexOf('t', 4));

// console.log(a.replaceAll('u', 'U'));

// let user = 'ulfat' //Ulfat
// let user2 = 'ulfat zakirli' //Ulfat Zakirli


// console.log(user.slice(0, 6));

// console.log(user.toUpperCase().slice(0, 1) + user.slice(1));

// console.log(user.replace('u', 'U'));

// console.log(user2.toUpperCase().slice(0, 1) + user2.slice(1, 6) + user2.toUpperCase().slice(6, 7) + user2.slice(7));
// console.log(user2.slice(0, 6).replace('u', 'U') + user2.slice(6).replace('z', 'Z'));

// console.log(user2.slice(6));


// let text = 'code academy cs403 baku'
// console.log(text.split(' ').join(' '));



// Array methods - map,filter
// console.log(students.map((student, index) => student));
// console.log(ages.map((age) => age * 10));

// console.log(students.filter((student) => !student.startsWith('E')));
// const ageIndex = ages.map((age, index) => {
//     if (age >= 20) {
//         return index
//     }
// }).filter(item => item)

// console.log(students);
// console.log(ageIndex);
// console.log(students.filter((student, index) => ageIndex.includes(index)));

// const ages = [19, 21, 22, 23, 30, 18, 20, 25, 26]
// let sum = 0
// ages.map(age => sum += age)
// console.log(sum);


// Tasks
// 1.console only age
// 2.console only gender
// 3.console only name

// 4.filter age that is equal and greater than 20 
// 5.filter only female
// 6.filter name which starts 'R'
// 7.filter name which includes 'a'
// 8.filter age which is odd
// 9.filter age which is even
// 10.consle indexs

// 11.conole only even indexs
// 12.Sum all students' age
// 13.Sum all indexs
// 14.Multiple only Female age


// const students = [
//     {
//         name: 'Aysu',
//         age: 20,
//         gender: 'Female'
//     },
//     {
//         name: 'Ibrahim',
//         age: 21,
//         gender: 'Male'
//     },
//     {
//         name: 'Ramil',
//         age: 30,
//         gender: 'Male'
//     },
// ]

// let a = 1
// console.log(students.map((student) => a *= student.age));
// console.log(a);

// let b = 0
// console.log(students.filter((student) => student.gender == 'Male').map((item) => b += item.age));
// console.log(b);

// console.log(students.map((_, index) => index));
// console.log(students[0].name);
// console.log(students.map((student, index) => student.gender));
// console.log(students.filter((student) => student.gender !== 'Male'));


// let a = 9, c = 6, b = 6
// console.log(a);
// console.log(c);
// console.log(b);
// let sum = 0
// students.map((_, index) => sum += index)
// console.log(sum);

const students = ['Ibrahim', 'Aysu', 'Tural', 'Ayxan', 'Elshen', 'Zaur', 'Ruslan', 'Elnur', 'Isa', 'Elmir', 'Ferhad', 'Ramil']
// const numbers = [9, 2, 4, 11, 12, 22, 8, 9, 6, 1]
// numbers.sort((a, b) => a - b)  //asc
// numbers.sort((a, b) => b - a)  //desc

students.sort().reverse()  //asc
// students.sort((a, b) => a.localeCompare(b))  //asc


// students.sort((a, b) => b.localeCompare(a))  //desc
// students.reverse().reverse()
console.log(students);
// numbers.sort((a, b) => {
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     }
// })

// console.log(numbers);


// console.log(numbers.filter((number, index) => number > 3));
// console.log(numbers.find((number, index) => number > 3));


// console.log(numbers.findIndex((index) => index > 3)); //9
// console.log(numbers.findLastIndex((index) => index > 3)); //6

