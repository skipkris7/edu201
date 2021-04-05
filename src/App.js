import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";
import {Menu} from "./components/Menu";
import {MainPage} from "./components/MainPage";
import {AboutUs} from "./components/AboutUs";
import {ContactUs} from "./components/ContactUs";
import {PostList} from "./components/PostList";
import {Post} from "./components/Post";
import {AddPost} from "./components/AddPost";
import {Reg} from "./components/Reg";

function App() {
  return (
    <div className="container">
        <BrowserRouter>
            <Menu/>
            <Route exact path="/" render={()=><PostList/>}/>
            <Route path="/main-page" render={()=><MainPage/>}/>
            <Route path="/about" render={()=><AboutUs/>}/>
            <Route path="/contact-us" render={()=><ContactUs/>}/>
            <Route path="/post" render={()=><Post/>}/>
            <Route path="/addPost" render={()=><AddPost/>}/>
            <Route path="/reg" render={()=><Reg/>}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
