import React from 'react';
import { Grid, Sidebar as Side, Menu, Dropdown } from "semantic-ui-react";



// https://react.semantic-ui.com/modules/accordion/#advanced-form
// https://react.semantic-ui.com/collections/menu/#types-attached
// https://react.semantic-ui.com/collections/grid/#responsive-variations-container
// https://react.semantic-ui.com/modules/sidebar/#examples-multiple

const Navbar = ()=> {

  return <> </>
};

const Sidebar = ({menu, cliking}) => {
  return( 
    <Grid columns={1}>
      <Side as={Menu} animation='overlay' vertical
        icon='labeled' inverted //onHide={() => alert(false)}
        visible={true} width='medium'>
          {menu.map(({catName, docNames}) => 
            <Menu.Item>
              <Dropdown text={catName} pointing className='link item'>
                  <Dropdown.Menu>
                      {docNames.map(({name, id}) => <Dropdown.Item onClick={() => cliking(id)}>{name}</Dropdown.Item>)}
                  </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          )}
      </Side>
    </Grid>
  );
}




export { Sidebar, Navbar };