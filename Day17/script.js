// function waitTwoSeconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Finished waiting!')
//         }, 2000);
//     });
// }

// async function  start() {
// console.log("start");

// let result = await waitTwoSeconds();
// console.log(result);
// console.log("end");

// }

// // start();

// async function getPost() {
//   console.log("Fetching post...");
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts/30");
//   let data = await response.json();
//   console.log("Post title:", data.title);
// }

// getPost();

function dashboard() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Loading Dashboard...");
        }, 1000);
    });
}

function login(username, password){
    return new Promise((resolve) => {
        setTimeout(() => {

                if(username === "Prince" && password === "12345") {
                  resolve(`Welcome ${username}!`)
              
                } else {
                    reject("Invalid Username or password");
                }
        }, 2000);
    });
}

async function loadDashboard() {
    
    const load = await dashboard();
    document.querySelector("#login").innerHTML += "<br>" + load;
}

async function start() {
    try {

        
        let username = prompt("Enter username: ");
        let password = prompt("Enter a password: ");

        const logins = await login(username, password);
        document.querySelector("#login").innerHTML = logins;
        await loadDashboard();
    } catch(error) {
        document.querySelector("#login").innerHTML = error;
    }

}

start();
