import {Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <center>
        <div className="nav">
            <Link to="/">Feedback</Link>
            <Link to="login">Login</Link>
            {/* <Link to="Signup">Signup</Link> */}

        </div>
        </center>
        </>
    );
}