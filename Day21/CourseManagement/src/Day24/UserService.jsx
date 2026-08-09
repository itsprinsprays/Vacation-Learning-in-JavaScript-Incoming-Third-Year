export async function createAccount(data) {
    const response = await fetch(`http://localhost:8080/user/create`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if(!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return await response.json();
}