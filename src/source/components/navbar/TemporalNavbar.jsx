import React from 'react';

const Sidebar = ({doctors, cliking, professions, setSelected}) => {

  let setCatts = (value) => {cliking(value); console.log(value)}
  let catMenu = (professions ?? []); 

  return(
    <div className="row">
      
      <div className="container low-whidt">
        <select className="form-select" onChange={({target:{value}}) =>{setCatts(value)}}>
          <option key={catMenu.length + 1 } value="" >Seleccione una categoria....</option>
          {catMenu.map( ({name,id},i) => <option value={id} key={i}>{name}</option> )}
        </select>
      </div>
  
      <div className="container low-whidt">
          <select className="form-select" onChange={({target:{value}}) => setSelected(value)}>
            <option key={doctors.length + 1 } value="" >Seleccione un doctor....</option>
            {doctors.map(({ Name , Id }, i ) => <option key={i} value={Id}>{Name}</option>)}
          </select>
      </div>
  </div>
  );

}





export { Sidebar };