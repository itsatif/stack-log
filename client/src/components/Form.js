import React, { useState } from 'react'
import './style/Form.css'
import axios from 'axios'


export default function Form() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPasword] = useState("");
    const [mobile,setMobile] = useState("")
    const [dob,setDob] = useState("")
    const [response,setResponse] = useState("");

    async function handleSignUp(){
        //password validation
        if(password !==confirmPassword){
            alert("password mismatch")
        }

        //email validation
        if(!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            alert("galat hai")
        }

        //mobile number validation
        let x = parseInt(mobile);
        if(isNaN(x)){
            window.alert("Mobile Number is not valid")
            console.log(mobile);
        }
        if(mobile.length!==10){
            alert("Mobile Number must be of 10 digits")
        }


        let data = await axios.post("http://localhost:4000/signup",{
            name:name,
            email:email,
            password:password,
            confirmPassword:confirmPassword,
            mobile:mobile,
            dob:dob})
        setResponse(data.data)
        console.log(data.data);
    }
    console.log(response);

    return (
        <div className='Form-input'>
            <form>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" value ={name} onChange={e=>setName(e.target.value)} placeholder='Enter Your Name'></input><br /></div>
                <div>
                    <label htmlFor='email' >Email</label>
                    <input type='email' value={email} onChange={e=>setEmail(e.target.value)} placeholder='example@example.com'></input><br />
                    </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" maxLength='12' value={password} onChange={e=>setPassword(e.target.value)} placeholder='Enter your password'></input><br />
                </div>
                <div>  
                <label htmlFor='new-password' >Confirm Password</label>
                <input type="password" maxLength='12' value ={confirmPassword} onChange={e=>setConfirmPasword(e.target.value)} placeholder='Re-Enter your password'></input><br />
                </div>
                <div>
                <label htmlFor='mobile' >Mobile Number</label>
                <input type='tel' placeholder='Enter Your Mobile Number' maxLength='10' value={mobile} onChange={e=>setMobile(e.target.value)}></input><br />
                </div>
                <div>
                <label htmlFor="dob" >Date of Birth</label>
                <input type="date" value={dob} onChange={e=>setDob(e.target.value)}></input><br />
                </div>
                <div>
                <button className='SignUp' type="button" onClick={handleSignUp}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

