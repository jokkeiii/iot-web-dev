// GET users
/*
fetch('https://reqres.in/api/users?page=2&per_page=5')
    .then(response => response.json())
    .then(response => {
        // console.log(response);
        const userData = response.data;
    })
    .catch(error => console.log(error));

console.log(userData);
*/
/*
// fetch multiple users
// function formats and prints userid : userfirstname userlastname
printUsers = (users) => {
    users.map(user => {
        console.log(`${user.id} : ${user.first_name} ${user.last_name}`);
    });
};


fetchUsers = async() => {
    try {
        const response = await fetch('https://reqres.in/api/users?page=1&per_page=12');
        const responseData = await response.json();
        printUsers(responseData.data);
    } catch (error) {
        console.log(error);
    }
}

fetchUsers();
*/

// fetch single user
/*
printUsers = (user) => {
    
    console.log(`${user.id} : ${user.first_name} ${user.last_name}`);
};


fetchUser = async(id) => {
    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        const responseData = await response.json();
        printUsers(responseData.data);
    } catch (error) {
        console.log(error);
    }
}

fetchUser(5);
*/
// post
// async
/*
createUser = async (user) => {
    try {
        // also fetch but give init values as object
        const response = await fetch('https://reqres.in/api/users/', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        console.log("Status Code: " + response.status);
        console.log("Status Text: " + response.statusText);

        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.log(error);
    }
};

const newUser = {
    email: 'bruce.wayne@reqres.in',
    first_name: 'Bruce',
    last_name: 'Wayne',
    job: 'Superhero'
}

createUser(newUser);

*/

deleteUser = async (id) => {


    const response = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'DELETE'
    });
    console.log("Status Code: " + response.status);
    console.log("Status Text: " + response.statusText);

}

deleteUser(513);
