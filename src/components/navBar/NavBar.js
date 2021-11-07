import React from "react"
import {Navbar, Nav, Button} from 'react-bootstrap'
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import "./NavBar.scss"

const NavBar = ({ siteTitle, menuLinks, navClass })=>{
    return (
        <>
            <Navbar className={navClass} bg="light" expand="md" fixed="top">
                <Navbar.Brand>
                    <Link to='/'>
                        <img src="icons/logo.png" alt={siteTitle} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            menuLinks.map(data => (
                                <Nav.Item>
                                    <Link to={data.link} className="nav-link" activeClassName="active">{data.name}</Link>
                                </Nav.Item>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
                <Button style={{marginLeft:'20px'}} variant="outline-primary">Đăng nhập</Button>
            </Navbar>
        </>
    )
}

NavBar.propTypes = {
    siteTitle: PropTypes.string,
}
NavBar.defaultProps = {
    siteTitle: ``,
}

export default NavBar