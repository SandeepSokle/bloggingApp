


import { useEffect, useState } from "react";
import { Redirect, Link} from "react-router-dom"
import "./Blog.css"
import "./style.css"
let Blog = (props)=>{

    let [newDataTitle , setNewDataTitle] = useState("");
    let [newDataBody , setNewDataBody] = useState("");
 
    useEffect(() => {
       if(props.user != null && props.allPost.length > 0){

    let temp = props.allPost.filter((ele)=>{
        return (ele.id === props.user)
    })
    
    
    setNewDataTitle(temp[0].blogTitle)
    setNewDataBody(temp[0].blogBody)
    console.log(temp[0]);
}
}, [props.allPost,props.user])

   return (
        <div className = "blogDataContainer">
        {props.user === "" ? <Redirect to = "/"></Redirect> :
            <>

        <div className = "blogTitle">{newDataTitle} </div>

        <div className = "blogBody">{newDataBody} </div>
        <button className = "blogBackBtn"><Link to = "/">Back</Link></button>

        </>}
    </div>)
}

export default Blog;
