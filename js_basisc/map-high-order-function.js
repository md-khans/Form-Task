const numbers = [1,2,3,4,5];
const squared = numbers.map(function(num) {
    return num * num;
});
console.log(squared);

const sum = numbers.map (function(num) {
    return num + num;
});
console.log(sum);

const divide = numbers.map(function(num) {
    return num % num
});
console.log(divide)