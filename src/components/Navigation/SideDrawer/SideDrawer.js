import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackDrawer from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {

    let attachedClasses=[classes.SideDrawer,classes.Close]
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open]
    }
    return (

        <Aux>
            <BackDrawer show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
           
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>

        </div>
        </Aux>
    );
}

export default sideDrawer;