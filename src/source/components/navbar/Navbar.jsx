import React, { useState } from 'react';

const Sidebar = ({menu, cliking}) => {

  let [selectedDocPerCat, setSelectedDocPerCat] = useState([]);
  let catMenu = (menu ?? [] ).map( o => o.catName);
  let setCatts = (value) => setSelectedDocPerCat((menu ?? []).filter(o =>o.catName === value).flatMap(o => o.docNames) );
   
  return(
    <div className="row">
      
      <div className="container low-whidt">
        <select className="form-select" onChange={({target:{value}}) =>{setCatts(value)}}>
          <option key={menu.length + 1 } value="" >Seleccione una categoria....</option>
          {catMenu.map((x,i) => <option value={x} key={i}>{x}</option> )}
        </select>
      </div>
  
      <div className="container low-whidt">
          <select className="form-select" onChange={({target:{value}}) => cliking(value)}>
            <option key={menu.length + 1 } value="" >Seleccione un doctor....</option>
            {selectedDocPerCat.map(({ name , id }, i ) => <option key={i} value={id}>{name}</option>)}
          </select>
      </div>
  </div>
  );

}





export { Sidebar };