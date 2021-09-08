



import { Redirect, Link } from "react-router-dom";
import { auth } from "./firebase";
import "./HomePage.css"
// import "./style.css"

let HomePage = (props) => {


  let logout = ()=>{
    auth.signOut();
  }

// console.log(props.user);

  return (
    <div className="homePageContainer">


      {props.user ? (
        <>
      <label className = "lable1">List Of Blogs</label>
      <ol className="list">
      
      {
        // console.log(props.post)
        props.post.map((ele)=>{
          return ( <Link to = "/home/blog"><li className="listOfBlogs" key = {ele.id} onClick = {()=>{
            
            props.selectUser(ele.id);
          }}>{ele.blogTitle}</li></Link>)
        })
      }

      {/* <Link to = "/home/blog"><li className="listOfBlogs">title1</li></Link> */}
        
      
        
      </ol>
<div className = "btnContainer">
      <Link to = "/newblog">

<button className="newBlogBtn">Write New Blog</button></Link>
<button className="newBlogBtn" onClick = {logout}>Signout</button>
</div>

</>):(<Redirect to ="/login"/>)}
          </div>
  );
};

export default HomePage;
