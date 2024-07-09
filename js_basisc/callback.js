function processData(input, callback) {
  return callback(input);
}

function toUpperCase(str) {
  return str.toUpperCase();
}
console.log(processData("hello world", toUpperCase));

function ForEachElement(arr,callback) {
  for (let i = 0; i < arr.length; i++) {
  callback(arr[i], i);
      }
}
ForEachElement([1,2,3,4,5], (Element,i) => {
  console.log(`Element ${i}: ${Element * 2}`)
});