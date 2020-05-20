import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auxiliary from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/ToolBar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css'

class Layout extends Component {
    state = {
        showSidedrawer: false
    };

    sideDrawerHandler = () => {
        this.setState({
            showSidedrawer: false
        })
    };

    toggleDrawerHandler = () => {
        this.setState({
            showSidedrawer: !this.state.showSidedrawer
        })
    };
    render() {
        return (
            <Auxiliary >
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    drawerClicked={this.toggleDrawerHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSidedrawer} closed={this.sideDrawerHandler}
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>);
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);