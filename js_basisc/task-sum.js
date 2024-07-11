

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    // numbersArray.map(function(number){
    //    sum = sum + number;
    // })
return sum;
}
let totalSum = calculateSum(numbersArray);
console.log("some of numbers from 1 to 10 is: " + totalSum);
