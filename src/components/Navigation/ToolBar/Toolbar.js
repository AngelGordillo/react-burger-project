import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';
import ToggleIcon from '../SideDrawer/ToggleIcon/ToggleIcon';

const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <ToggleIcon clicked={props.drawerClicked}
        />
        <div className={classes.Logo}>
        <Logo/>
        </div>
      
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}></NavigationItems>
        </nav>
    </header>
);

export default toolbar;