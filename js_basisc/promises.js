let promise = new Promise(function(resolve, reject)  {
    setTimeout(function() {
        let success = true;
        if (success) {
            resolve("operation successful");
        } else {
            reject ("Operation failed");
        }
    }, 2000);
});
promise.then(function(result) {
    console.log("Success:", result);    
}).catch(function(Error) {
    console.log("Error:", Error)
});