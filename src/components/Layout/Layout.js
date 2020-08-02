import React, { Component, Fragment } from 'react';

import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  openSideDrawerHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  }

  render() {
    return (
      <Fragment>
        <Toolbar drawerToggleClicked={this.openSideDrawerHandler}/>
        <SideDrawer
          isOpen={this.state.showSideDrawer}
          closed={this.closeSideDrawerHandler} />
        <main className={styles.Content}>
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}

export default Layout;
