console.log("--- START OF SCRIPT ---");

const myPromise = new Promise((resolve, reject) => {
    // condition did the promise fail or did the promise succeed

    const data = {
        name: "John Wick",
        age: 24
    };

    const error = {
        message: "Error!"
    };

    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve("Promise resolved - Success!");
        } else {
            reject("Promise rejected - Fail!");
        };
    }, 3000);
});

myPromise 
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        console.log(data);
    })

    console.log("--- END OF SCRIPT ---");