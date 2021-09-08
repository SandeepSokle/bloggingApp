


import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./Blog.css"
import "./style.css"
let Blog = (props)=>{

    let [newDataTitle , setNewDataTitle] = useState("");
    let [newDataBody , setNewDataBody] = useState("");

   useEffect(() => {
    let temp = props.allPost.filter((ele)=>{
        return (ele.id === props.user)
    })

    setNewDataTitle(temp[0].blogTitle)
    setNewDataBody(temp[0].blogBody)
    console.log(temp[0]);
}, [props.allPost,props.user])


    return <div className = "blogDataContainer">

        <div className = "blogTitle">{newDataTitle} </div>

        <div className = "blogBody">{newDataBody} </div>
        <button className = "blogBackBtn"><Link to = "/home">Back</Link></button>
    </div>
}

export default Blog;