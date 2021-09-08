


import "./CreateNewBlog.css"
import {Link} from "react-router-dom"
import firebase , { firestore } from "./firebase"
// import "./style.css"
let CreateNewBlog = (props)=>{
    return <div className = "newBlogContainer">
        <textarea className = "inputTitle" placeholder = "Title......."></textarea>
        <textarea className = "inputBody" placeholder = "What's in Your Mind....."></textarea>
        <div className = "Btn">

        <Link to = "./home"><button className = "newBlogBackBtn">Back</button></Link>
        <Link to = "./home"><button className = "newBlogSubmitBtn" onClick = {()=>{

            let blogTitle = document.querySelector(".inputTitle");
            let blogBody = document.querySelector(".inputBody");

            const timestamp = firebase.firestore.FieldValue.serverTimestamp;
            // console.log();

            firestore.collection("posts").add({ title: blogTitle.value, body :  blogBody.value, createdAt: timestamp() , uid : props.user.uid });

        }}>Post</button></Link>
        </div>
    </div>
}

export default CreateNewBlog;