import React from "react";
import './css/App.css';
import { HashRouter } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { SidebarTest } from "./components/navbar/SidebarTest";
import { obj } from "./fakedata-db/Menus";
import {Calendar} from "./components/Calendar";

const App = () => 
<div>
  <HashRouter>  
    <Navbar title="CApp" 
    InitialOptions={obj}
    EndingOptions={obj} 
    />   
    <div className="container-fluid">
      <div className="row">
        <main className="col-sm">
          
          <div className="container low-whidt">
          
            <Calendar doctorProps={[]} settingDate={(d) => console.log(d)} />
            
          </div>

          
        </main>
      </div>
    </div>
  </HashRouter>
</div>
;



export default App;
