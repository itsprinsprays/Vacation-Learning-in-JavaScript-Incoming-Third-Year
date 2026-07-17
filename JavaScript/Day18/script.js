// async function getUSers() {

//     const response = await fetch ("https://jsonplaceholder.typicode.com/users");

//     const users = await response.json();

//     console.log(users);
// }

// getUSers();

async function getUserById(id) {
    const response = await fetch ("https://jsonplaceholder.typicode.com/users");


    const user = await response.json();
    const filteredUser = user
                        .find(finds => finds.id === id);
    return filteredUser;

}

async function start() {

    try {

    const user = await getUserById(100);

    if(!user) {
        console.log("User not found.");
        return;
    }

    else console.log(user.name);

    } catch(error) {
        console.log("Failed to connect to the server");
    }
}

start();

