// Math methods
// console.log(getValue('Aysu'));
// console.log(getValue('Ulfat', 'Zakirli'));
// console.log(getValue('Ibo'));
// console.log(getValue('Ayxan', 'Ayxanli'));
// console.log(Math.max(...group1));
// console.log(Math.max.apply(null, group1));

// console.log(Math.round(22.2));
// console.log(Math.ceil(22.1));
// console.log(Math.floor(22.9));
// console.log(Math.max(1, 3, 77, 9));
// console.log(Math.min(...[1, 3, 77, 9]));

// console.log(Math.abs(-9));
// console.log(Math.sqrt(23 + 2));

// console.log(Math.pow(5, 2));
// console.log(5 ** 2);

// const students = ['Ibrahim', 'Aysu', 'Tural', 'Ayxan']
// console.log(students[Math.round(Math.random() * (students.length - 1))]);


// Functions

const group1 = [20, 20, 16, 30, 20, 19, 18, 25, 19, 26, 33]  //CS403  - 23

const group2 = [21, 20, 22, 30, 20, 19, 24, 35, 32, 26, 15]  //CS402


const group3 = [15, 20, 16, 30, 20, 19, 18, 25, 19, 26, 17]  //CS401
const group4 = [20, 20, 24, 30, 22, 19, 18, 25, 29, 26, 33]  //CS400
const group5 = [20, 32, 16, 30, 20, 19, 18, 25, 19, 36, 36]  //CS407


// const allGroup = [group1, group2, group3, group4, group5]



// function calcAvg(anyGroup) {
//     let sum = 0
//     anyGroup.map(item => sum += item)
//     let count = Math.ceil(sum / anyGroup.length)
//     return count
// }


// console.log(calcAvg(group1));
// console.log(calcAvg(group2));
// console.log(calcAvg(group3));


// function declaration
// function getValue(firstName, lastName = '---') {
//     return firstName + ' ' + lastName
// }

// function getValue() {

// }

// function expression


// const getValue = function (firstName, lastName = '---') {
//     return firstName + ' ' + lastName
// }


// arrow function
// const getValue = function () {

// }
// const getValue = () => {

// }


// console.log([7, 9].map(function (item, index) {
//     return item += 10
// }));

// console.log([7, 9].map((item, index) => (
//     item += 10
// )));




// Task
const arr1 = [5, 8, 2, 11, 9]
const arr2 = [50, 8, 25, 12, 19]

// 1.calcMult of arrays in function
// 2.get only odd values 
// 3.get only even values


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
        age: 30,
        gender: 'male'
    },
]

// 4.write function that return name of users
// 5.write function that return gender of users
// 6.write function that return age of users
// 7.write function that return only male of users
// 8.write function that return users whose age is greater than 20 


// 9.write function that take firstName,lastName,age as parametr then call and
//  give these values to function(age can be empty,give default value)
