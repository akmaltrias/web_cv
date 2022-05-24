import React from 'react';
import {Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { resumeData }  from '../../utils/resumeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitlab, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from 'react-router-dom';

import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  console.log(pathName);

  return (
    <Navbar expand="lg" className='header'>
      {/* Home Section */}
      <Nav.Link as={NavLink} to='/' style={{ padding: 0 }}>
        <NavbarBrand className='header_home'> 
          <HomeRoundedIcon />
        </NavbarBrand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to='/'
            exact
            className={pathName === "/" ? "header_link_active" : "header_link"}>
            RESUME
          </Nav.Link>

        {/* Portofolio Link */}
        <Nav.Link
            as={NavLink}
            to='/portofolio'
            className={pathName === "/portofolio" ? "header_link_active" : "header_link"}>
              PORTOFOLIO
          </Nav.Link>
         
        </Nav>

        <div className="header_right">
          <a href={resumeData.gitlab}>
            <FontAwesomeIcon icon={faGitlab} fixedWidth className='icon_contact'/>
          </a>
          <a href={resumeData.ig}>
            <FontAwesomeIcon icon={faInstagram} fixedWidth className='icon_contact'/>
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;