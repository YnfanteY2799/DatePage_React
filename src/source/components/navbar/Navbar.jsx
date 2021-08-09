import React from 'react';
import { Menu, Input } from "semantic-ui-react";


const NavBar = ({opts}) => {

    let handleItemClick = () => window.alert("AAAA");


    // https://react.semantic-ui.com/modules/sidebar/#types-sidebar

    return <Menu secondary>
    <Menu.Item name='home' active={"activeItem" === 'home'}/>
    <Menu.Item
      name='messages'
      active={"activeItem" === 'messages'}
      onClick={handleItemClick}
    />
    <Menu.Item
      name='friends'
      active={"activeItem" === 'friends'}
      onClick={handleItemClick}
    />
    <Menu.Menu position='right'>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
      <Menu.Item
        name='logout'
        active={"activeItem" === 'logout'}
        onClick={handleItemClick}
      />
    </Menu.Menu>
  </Menu>;
}




export { NavBar };