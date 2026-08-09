import { useState } from "react";
import { createAccount } from "./UserService.js"

export default function CreateAccount({ onCreate }) {

    const [account, setAccount] = useState({
        "username": "",
        "password": "",
        "role": ""
    });


    function handleChange(e) {
        setAccount({
            ...account,
            [e.target.name]: e.target.value
        });
    }

   async function handleSubmit(e) {
        e.preventDefault();

        await onCreate(account)
         console.log(account)

        setAccount({
            "username": "",
            "password": "",
            "role": ""
        })
    }

    return(
    <form onSubmit={handleSubmit}>

        <input 
            type="text"
            placeholder="Create Username"
            value={account.username}
            name="username"
            onChange={handleChange}
        />

        <input
            type="password"
            placeholder="Create password"
            value={account.password}
            name="password"
            onChange={handleChange}
        />

        <select 
            name="role"
            value={account.role}
            onChange={handleChange}
            >
            <option value="">Select Role</option>
            <option value="ADMIN">Admin</option>
            <option value="HR">HR</option>
            <option value="EMPLOYEE">Employee</option>
         </select>

        <button type="submit">Submit</button>
        

    </form>

    );

}