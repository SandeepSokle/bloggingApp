



import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth, signInWithGoogle } from "./firebase";


// import "./style.css"
import "./Login.css"
let Login = (props)=>{


    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          //if login-> user info
          //if logout-> user = null
          if (user) {
            let { displayName, email,uid } = user;
            console.log(user);
    
            props.setUser({ displayName, email ,uid});
          } else {
            props.setUser(user);
          }
        });
      }, []);



    return <div className = "loginContainer" >
        {props.user ? <Redirect to="/home" /> : ""}
        <button className = "loginBtn" onClick={signInWithGoogle}
    type="submit"
    className="btn btn-primary m-4"
  >Login Using Google</button></div>
}

export default Login;