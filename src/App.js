




import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {useState, useEffect} from "react"
import CreateNewBlog from "./CreateNewBlog";
import Blog from "./Blog";
import HomePage from "./HomePage";
import Login from "./Login";
import  { firestore } from "./firebase"


let App = () => {
  let [posts, setPosts] = useState([]);
  let [user, setUser] = useState(null);
  let [selectUser, setSelectedUser] = useState("");
  let [uniId,setUniId] = useState(null);
  
useEffect(() => {
  if(user !== null)
  setUniId(user.uid);
}, [user]);



    useEffect(() => {
      let f = async () => {
        console.log(uniId);
        await firestore.collection("posts").onSnapshot((querySnapshot) => {
          let tempArr = [];

          querySnapshot.forEach((doc) => {
            if (uniId === doc.data().uid) {
              tempArr.push({
                id: doc.id,
                blogTitle: doc.data().title,
                blogBody: doc.data().body,
              });
            }
          });
          setPosts(tempArr);
        });
      };
      f();
    }, [user, uniId]);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/home/blog">
            <Blog allPost={posts} user={selectUser} />
          </Route>
          <Route path="/newblog">
            <CreateNewBlog user={user} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} user={user} />
          </Route>
<Route path="/home">
           <HomePage user={user} post={posts} selectUser={setSelectedUser} />
          </Route>
          <Route path="/">
            <HomePage user={user} post={posts} selectUser={setSelectedUser} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};


export default App;
