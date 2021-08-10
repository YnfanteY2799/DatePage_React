import React from 'react';
import { Grid, Sidebar as SemanticSide, Menu, Input } from "semantic-ui-react";



// https://react.semantic-ui.com/modules/accordion/#advanced-form
// https://react.semantic-ui.com/collections/menu/#types-attached
// https://react.semantic-ui.com/collections/grid/#responsive-variations-container
// https://react.semantic-ui.com/modules/sidebar/#examples-multiple

const Navbar = ()=> {

  return <> </>
};

const Sidebar = ({opts}) => {
    return <Grid columns={1}>

      <SemanticSide as={Menu} animation='overlay' vertical
        icon='labeled' inverted onHide={() => alert(false)}
        visible={true} width='medium'>
            <Menu.Item as='a'><Input></Input></Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>Games</Menu.Item>
            <Menu.Item as='a'>Channels</Menu.Item>
      </SemanticSide>

    </Grid>;
}




export { Sidebar, Navbar };