import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { ProSidebar, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from "react-icons/fa";
import { FiHome, FiLogIn, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/Ri";
import {CgProfile} from "react-icons/Cg";
import {AiOutlineEdit} from "react-icons/Ai";
import {MdAddCircleOutline, MdPassword} from "react-icons/Md";

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class SideBar extends React.Component {
  render() {
    return (
<ProSidebar>
  {this.props.currentUser === '' ? (
      <Menu iconShape="square">
      <MenuItem textAlign="center" icon={<RiLockPasswordLine />}>Fast Pass<Link to="/" /></MenuItem>
      <SidebarHeader></SidebarHeader>
    <MenuItem icon={<FiLogIn />}>Sign in<Link to="/signin" /></MenuItem>
    <MenuItem icon={<CgProfile />}>Register<Link to="/signup" /></MenuItem>
    </Menu>
  ) : (
    <Menu iconShape="square">
  <MenuItem textAlign="center" icon={<RiLockPasswordLine />}>Fast Pass</MenuItem>
  <SidebarHeader></SidebarHeader>
  <MenuItem textAlign="center" icon={<CgProfile />}>{this.props.currentUser}</MenuItem>
  <SidebarHeader></SidebarHeader>
  <MenuItem icon={<FiHome />}>Dashboard<Link to="/dashboard"/></MenuItem>
  <SubMenu title="Passwords" icon={<MdPassword />}>
  <MenuItem icon={<AiOutlineEdit />}>Add<Link to="/add" /></MenuItem>
    </SubMenu>
    <SidebarHeader></SidebarHeader>
    <MenuItem icon={<BiCog />}>Settings</MenuItem>
    <MenuItem icon={<FiLogOut />}>Logout<Link to="/signout" /></MenuItem>
    </Menu>
)}
</ProSidebar>
    );
  }
}

// Declare the types of all properties.
SideBar.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const SideBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(SideBar);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(SideBarContainer);