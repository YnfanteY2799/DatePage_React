import React from "react";
import './css/App.css';
import { HashRouter } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
// import { Sidebar } from "./components/navbar/Sidebar";
import { obj } from "./fakedata-db/Menus";


console.log(obj)

const App = () => 
<div>
  <HashRouter>  
    <Navbar title={"CApp"} EndingOptions={obj} InitialOptions={obj}/>   
    <div className="container-fluid">
      .row
      
    </div>
  </HashRouter>
</div>
;



export default App;
