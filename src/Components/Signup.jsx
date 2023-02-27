import React, { useState } from 'react';
const Signup = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    //  const[Value , setValue] = useState({
    //     name:"",
    //     email:"",
    //     password:""
    //  })
    
    const formSubmit = (event) => {
        
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        // localStorage.setItem("initialValue",JSON.stringify(initialValue))
        event.preventDefault();
    }
    return (
        <div>
            <h1>Sign-up</h1>
            <form onSubmit={formSubmit}>
                {/* <label> Name:
                    <input type="text" value={initialValue.name} onChange={(event) => ({...initialValue , name : setInitialValue(event.target.value)})} />
                </label>
                <br />
                <label> Email:
                    <input type="email" value={initialValue.email} onChange={(event) => ({...initialValue,email: setInitialValue(event.target.value)})} />
                </label>
                <br />
                <label> Password:
                    <input type="password" value={initialValue.password} onChange={(event) => ({...initialValue,password: setInitialValue(event.target.value)})} />
                </label> */}
                <label> Name:
                    <input type="text" value={name} onChange={(event)=>{ setname(event.target.value)}} />
                </label>
                <br />
                <label> Email:
                    <input type="email" value={email} onChange={(event)=>{ setemail(event.target.value)}} />
                </label>
                <br />
                <label> Password:
                    <input type="password" value={password} onChange={(event)=>{ setpassword(event.target.value)}} />
                </label>
                <br />
                
                <button type='submit'>SignUp</button>

            </form>
        </div>
    )
}

export default Signup;