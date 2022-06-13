import React, {ReactDom, useState} from "react";

const Login = () => {
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");
    return (
        <form>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPwd(e.target.value)} />
            <button>Login</button>
        </form>
    )
}


export default Login;