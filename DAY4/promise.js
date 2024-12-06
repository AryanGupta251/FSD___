const promise = new Promise(function(resolve, reject){
    console.log("my first promise")
    // resolve("resolved");
    reject("rejected");
});
promise.then(() => {
    console.log("my first then")
}).catch(()=> {
    console.log("my first catch")
})