const arr1 = [{key: 1, b: 11}, {key: 2, b: 22}, {key: 3, b: 33}];
// const result1 = arr1.filter((el) => el.key === 2)
const arr2 = ['aaa', 'bbb', 'ccca'];

// arr2[0].b = null

// console.log(arr2)
// console.log(arr1)


// const arr4 = arr2.filter((el) => el.includes('a'))

// console.log(arr4)
// console.log(arr2)

const result1 = arr1.find((el) => el.key === 1)
const result2 = arr2.find((el) => {
    return el === 'aaa';
})
const result3 = arr2.find((el) => el.includes('a'))

let a = 1;
let b = 0;
let c = null;

console.log(a || b && c)
console.log((a || b) && c)