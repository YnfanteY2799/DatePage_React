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
    <Navbar 
    title="CApp" 
    InitialOptions={obj}
    EndingOptions={obj} 
    />   
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
          1
        </div>
        <main className="col-sm">
          2
        </main>
        <div className="col-sm">
          3
        </div>
      </div>
    </div>
  </HashRouter>
</div>
;



export default App;
