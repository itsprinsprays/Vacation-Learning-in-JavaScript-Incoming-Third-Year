import { useState } from "react";

export default function CreateAccount({ onCreate }) {

    const [account, setAccount] = useState({
        "username": "",
        "password": "",
        "role": ""
    });


    function handleChange() {
        setAccount({
            ...account,
            [e.target.name]: [e.target.value]
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        await onCreate(account)

        setAccount({
            "username": "",
            "password": "",
            "role": ""
        })
    }

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
            <option value="admin">Admin</option>
            <option value="hr">HR</option>
            <option value="employee">Employee</option>
         </select>

        <button type="submit">Submit</button>
        

    </form>

}