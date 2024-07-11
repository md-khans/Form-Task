// //Objects

// const car = {
//     company: "Mehran",
//     model: 2022
// }
// console.log(car)


//Arrays and Arrays of Objects


const Fruits = ["Mango","Apple","Banana","Orange"];

const upperCaseFruits = Fruits.map(function(fruit) {
    return fruit.toUpperCase();    
});
// console.log(upperCaseFruits)

const fruitwithtext = upperCaseFruits.map(function(fruit) {
    return fruit + ' is a very delicious';
});

const fruitObject = fruitwithtext.map(function(fruit) {
    return {
        Name: fruit,
        length: fruit.length
    }
});

console.log(fruitObject);