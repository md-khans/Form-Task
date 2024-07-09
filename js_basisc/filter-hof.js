// // Example of filter function
// let numbers = [1, 2, 3, 4, 5];

// let evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0;
// });

// console.log(evenNumbers); // Output: [2, 4]


const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,];
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("This is Even Numbers", evenNumbers)

const ages = [19,22,25]
const checkadult = ages.filter(function(ages) {
    return  ages >= 18;
});
console.log("This is Adult",checkadult);
