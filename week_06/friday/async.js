console.log("--- START OF SCRIPT ---");
function promiseReturningFunction() {
    return new Promise((resolve, reject) => {
        
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
                resolve(data);
            } else {
                reject(error);
            };
        }, 3000);
    });
}

async function asyncFunction() {    
    
    try {
        const result = await promiseReturningFunction();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

const fetchData = async () => {
    try {
        const result = await promiseReturningFunction();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

asyncFunction();

fetchData();

console.log("--- END OF SCRIPT ---");
