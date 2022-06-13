import React, { ReactDom, useState } from "react";

const Signup = () => {
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");
    return (
        <form action="">
            <h1>Register</h1>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPwd(e.target.value)} />
            <button>Sign Up</button>
        </form>
    )
}

export default Signup;