import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, Link } from 'react-router-dom';
// import { Roles } from 'meteor/alanning:roles';
import { ProSidebar, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// import { FaGem, FaHeart } from 'react-icons/fa';
import { FiHome, FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import { BiCog, BiCategory } from 'react-icons/bi';
import { RiLockPasswordLine } from 'react-icons/Ri';
import { CgProfile, CgPassword } from 'react-icons/Cg';
import { AiOutlineEdit } from 'react-icons/Ai';
import { TiSocialInstagram } from 'react-icons/Ti';
import { MdOutlinePrivacyTip, MdOutlineTheaterComedy, MdPassword } from 'react-icons/Md';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class SideBar extends React.Component {
  render() {
    return (
      <ProSidebar style={{ position: 'fixed', height: '100%' }} className="sidebar">
        {this.props.currentUser === '' ? (
          <Menu iconShape="square">
            <MenuItem icon={<RiLockPasswordLine />}>Fast Pass<Link to="/" /></MenuItem>
            <SidebarHeader></SidebarHeader>
            <MenuItem icon={<FiLogIn />}>Sign in<Link to="/signin" /></MenuItem>
            <MenuItem icon={<CgProfile />}>Register<Link to="/signup" /></MenuItem>
            <MenuItem icon={<MdOutlinePrivacyTip />}>Privacy Policy<Link to="/privacy-policy" /></MenuItem>
            <MenuItem icon={<MdOutlinePrivacyTip />}>Terms of Service<Link to="/terms-of-service" /></MenuItem>
          </Menu>
        ) : (
          <Menu iconShape="square">
            <MenuItem icon={<RiLockPasswordLine />}>Fast Pass<Link to="/" /></MenuItem>
            <SidebarHeader></SidebarHeader>
            <MenuItem icon={<CgProfile />}>{this.props.currentUser}</MenuItem>
            <SidebarHeader></SidebarHeader>
            <MenuItem icon={<FiHome />}>Dashboard<Link to="/dashboard"/></MenuItem>
            <SubMenu title="Passwords" icon={<MdPassword />}>
              <MenuItem icon={<AiOutlineEdit />}>Add<Link to="/add" /></MenuItem>
              <MenuItem icon={<AiOutlineEdit />}>Password Generator<Link to="/password-generator"/></MenuItem>
            </SubMenu>
            <SubMenu title="Categories" icon={<BiCategory />}>
              <MenuItem icon={<TiSocialInstagram />}>Social<Link to="/social" /></MenuItem>
              <MenuItem icon={<FiShoppingCart />}>Retail<Link to="/retail" /></MenuItem>
              <MenuItem icon={<MdOutlineTheaterComedy />}>Entertainment<Link to="/entertainment" /></MenuItem>
              <MenuItem icon={<CgPassword />}>Miscellaneous<Link to="/misc" /></MenuItem>

            </SubMenu>
            <SidebarHeader></SidebarHeader>
            <MenuItem icon={<BiCog />}>Settings<Link to="/multifactor-settings"/></MenuItem>
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
