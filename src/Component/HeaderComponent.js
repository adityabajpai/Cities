import React from 'react';
import logo from '../logo.svg';
import '../Style/sideNav.css'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

class HeaderComponent extends React.Component{

    constructor(props){
        super(props);
        this.openSlideMenu = this.openSlideMenu.bind(this);
        this.closeSlideMenu = this.closeSlideMenu.bind(this);
    }

    openSlideMenu(){
        document.getElementById('side-menu').style.width = '250px';
        // document.getElementById('main').style.marginLeft = '250px';
    }

    closeSlideMenu(){
        document.getElementById('side-menu').style.width = '0px';
        // document.getElementById('main').style.marginLeft = '0px';
    }

    render(){
        return(
            <div>
                <Navbar bg="light" expand="lg" fixed="top">
                    <span className="open-slide">
                        <a href="#" onClick={this.openSlideMenu}>
                            <svg width="30" height="30">
                                <path d="M0,5 30,5" stroke="#000" strokeWidth="3"/>
                                <path d="M0,14 30,14" stroke="#000" strokeWidth="3"/>
                                <path d="M0,23 30,23" stroke="#000" strokeWidth="3"/>
                            </svg>
                        </a>
                    </span>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />
                        {' itch.io'}
                    </Navbar.Brand>
                    <div id="side-menu" className="side-nav">
                        <a href="#" className="btn-close" onClick={this.closeSlideMenu}>&times;</a>
                        <a href="#horrorGames" >Asia</a>
                        <a href="#multiplayer" >Europe</a>
                        <a href="#visualNovels" >Australia</a>
                        <a href="#htmlGames" >Antarctica</a>
                        <a href="#simulation" >North America</a>
                        <a href="#macOSGames" >South America</a>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#browseGames">Browse Cities</Nav.Link>
                        <Nav.Link href="#gameJams">Browse Islands</Nav.Link>
                        <Nav.Link href="#gameJams">Browse Forests</Nav.Link>
                        <Nav.Link href="#gameJams">Browse Deserts</Nav.Link>
                        <Nav.Link href="#uploadGame">Upload City/Island</Nav.Link>
                        <Nav.Link href="#devlogs">Bloggers</Nav.Link>
                        <Nav.Link href="#community">About Us</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search for places" className="mr-sm" />
                        <Nav>
                            <Nav.Link>
                            <Button variant="outline-success">Login</Button>
                            </Nav.Link>
                            <Nav.Link>
                            <Button variant="outline-success">Register</Button>
                            </Nav.Link>
                        </Nav>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default HeaderComponent;