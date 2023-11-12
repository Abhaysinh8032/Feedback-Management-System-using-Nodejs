import NavBar from "./NavBar";
import {useState } from "react";
import {getAuth , signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate } from "react-router-dom";
import app from "./FbConfig";

function Login(){
    const nav = useNavigate();

    // useEffect(()=>{
    //     const un = localStorage.getItem("un");
    //     if(un !=null)
    //         nav("/Home");
    // },[])
    const [un,setUn] = useState("");
    const [pw,setPw] = useState("");
    const [ans,setAns] = useState("");

    const hUn = (event) => {setUn(event.target.value);}
    const hPw = (event) => {setPw(event.target.value);}
    const hSignup = (event) => {nav("/Signup")}
    const check = (event) => {
        event.preventDefault();
        const auth =getAuth();
        signInWithEmailAndPassword(auth,un,pw)
        .then(res => {
            localStorage.setItem("un",un);
            nav("/Home")
            
        })
        .catch(err => 
        alert("invalid username/password"));
    }

    return(
        <>
        <center>
            <h1>Login</h1>
            <form onSubmit={check}>
                <input type="email" placeholder="enter ref mail"
                onChange={hUn}/>
                <br/><br/>
                <input type = "password" placeholder="enter password"
                onChange={hPw}/>
                <br/><br/>
                <input type="Submit" value="Login"/>
            </form>
            <br/><br/>
            <button onClick={hSignup}>Sign Up</button>
            <h3>{ans}</h3>
        </center>
        </>
    );

}
export default Login;