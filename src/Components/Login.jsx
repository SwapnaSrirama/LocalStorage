import React, { useState } from 'react';
import Images from './Home';

const Login = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [logedin,setLogedIn]=useState(false)
    // const [values, setValues] = useState({
    //     email: "",
    //     password: "",
    //     logedin: false
    // })

    const loginSubmit = (event) => {
        event.preventDefault();
        
        const checkeml = localStorage.getItem("email")
        const checkpass = localStorage.getItem("password")
        // console.log(checkeml,checkpass);
        if (checkeml === email && checkpass ===password) {
            setLogedIn(true)
            // setValues({ ...values, logedin: true })
        } else {
            alert("Wrong Info")
        }
        
    }
    return (
        <div>
            <h1>Log-in</h1>
            <form onSubmit={loginSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(event) => {setemail(event.target.value)}} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(event) => {setpassword(event.target.value)}} />
                </label>
                <br />
                <button type='submit'>Login</button>
            </form>
            {logedin && <Images />}
        </div>
    )
}

export default Login;