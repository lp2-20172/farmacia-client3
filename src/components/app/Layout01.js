import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth'

import styles from './styles';

import {
  withRouter
} from 'react-router-dom'
import { RouteWithSubRoutes } from '../../node_m/react-router-dom-ext'
import { findActiveNodeRoute } from '../../node_m/react-router-dom-ext'
import { routes } from '../../routes'
import { menus } from '../../menu'
import AppMenu from './AppMenu'
import { connect } from 'react-redux'
import { toggleTheme } from '../../actions/theme-action'
import compose from 'recompose/compose'
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';

import Menux from './Menux'

class PersistentDrawer extends React.Component {
  /*state = {
    open: false,
  };
  */
  constructor(props) {
    super(props);
    let open = false
    if (isWidthUp('lg', props.width)) {
      open = true
    }
    let user = null
    if (localStorage.getItem('user') !== "undefined") {
      user = JSON.parse(localStorage.getItem('user'))
    }

    this.state = {
      open: open,
      username: user ? user.username : null
    }

  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  }
  handleToggleShade = (event) => {
    this.props.toggleTheme()
    //this.props.dispatch({ type: 'TOGGLE_THEME_SHADE' });
  }

  render() {
    const { classes, theme, width } = this.props;
    let { location } = this.props
    //console.log('location:' + JSON.stringify(location))
    const { title } = findActiveNodeRoute(menus, location)
    let drawerDocked = isWidthUp('lg', width);
    let drawerType = 'persistent' //persistent temporary permanent
    if (drawerDocked) {
      drawerType = 'persistent'
    } else {
      drawerType = 'temporary' // se debe hacer open=true/false
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classNames(classes.appBar, (this.state.open && drawerDocked) && classes.appBarShift)}>
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, (this.state.open && drawerDocked) && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" noWrap>
                {title.parent ? title.parent + (title.children ? ' > ' : '') + title.children : title.children}
              </Typography>
              <title>
                {title.parent ? title.parent + (title.children ? ' > ' : '') + title.children : title.children}
                - Farmacia
              </title>
              <div className={classes.grow} />
              <IconButton
                title="Toggle light/dark theme"
                color="contrast"
                onClick={this.handleToggleShade}
              >
                <LightbulbOutline />
              </IconButton>

            </Toolbar>
          </AppBar>
          <Drawer
            type={drawerType} //"persistent"
            classes={{
              paper: classes.drawerPaper,
            }}
            open={this.state.open}
            onRequestClose={this.handleDrawerClose}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <AppMenu menus={menus}
                onRequestClose={!isWidthUp('lg', width) ? this.handleDrawerClose : () => { }}>
                Loading...
              </AppMenu>
              <Divider />
              <Menux />
              <Divider />

            </div>
          </Drawer>
          <main className={classNames(classes.content, (this.state.open && drawerDocked) && classes.contentShift)}>

            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </main>
        </div>
      </div>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
const mapStateToProps = ({ auth }) => ({
  //isLoggedIn: auth.isLoggedIn
})
/*
export default ( withStyles(styles, { withTheme: true }))
(withRouter(PersistentDrawer));
*/
export default compose(
  withRouter,
  withWidth(),
  withStyles(styles, { withTheme: true }),
  connect(mapStateToProps, {
    toggleTheme
  })
)(PersistentDrawer)
