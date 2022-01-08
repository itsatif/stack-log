import React, { useState } from 'react'
import './style/Login.css'
import axios from 'axios'


export default function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [response,setResponse] = useState("");

    const handleLogin = async() => {
        //useername validation
        if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(username))){
            alert("galat hai")
        }
        let data =  await axios.post("http://localhost:4000/login",{
            username:username,
            password:password
        })
        console.log(data.data);
        setResponse(data.data);
    };
    console.log(response);
    return (
        <div className='Login'>
            <h1>Login</h1>
            <form className='login-form'>
            <label htmlFor='username'>Username</label><br/>
            <input type="email" value={username}  onChange={e=>setUsername(e.target.value)} placeholder='Email/Mobile'>
            </input><br/>
            <label htmlFor='password'>Password</label><br/>
            <input type="password" maxLength="12" value={password} onChange={e=>setPassword(e.target.value)}placeholder='Enter your password'></input><br/>
            <button type="button" onClick={handleLogin}>Log in</button>
            </form>
        </div>
    )
}
