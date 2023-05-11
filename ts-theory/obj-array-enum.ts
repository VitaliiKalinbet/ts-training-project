// function add(n1: number, n2: number, showResult: boolean, prase: string) {
//     // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
//     //     throw new Error('Incorrect input!');
//     // }
//     const result = n1 + n2;
//     if (showResult) {
//         console.log(prase + result);
//     } else {
//         return result;
//     }
// };

// let number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is: ';

// add(number1, number2, printResult, resultPhrase);
// // console.log(result);

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Bit',
    age: 29,
    hobbies: ['sports', 'travel'],
    role: Role.ADMIN
}

console.log('Role.ADMIN: ', Role.ADMIN);
console.log('person.role: ', person.role);

if (person.role === Role.ADMIN) {
    console.log('is admin')
}