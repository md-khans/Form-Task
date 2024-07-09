//  Async/Await

function fetchData() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received!');
        }, 5000);
    });
}
async function getData() {
    console.log("Fetching data...");
    let result = await fetchData();
    console.log(result);
}
getData();