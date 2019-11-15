import React from 'react';
import logo from '../logo.svg';
import '../Style/sideNav.css'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {ModalHeader, ModalBody, Modal, FormGroup, Label, Input} from 'reactstrap';

class HeaderComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          isLoginModalOpen: false,
          isRegisterModalOpen: false
        };
        this.openSlideMenu = this.openSlideMenu.bind(this);
        this.closeSlideMenu = this.closeSlideMenu.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    toggleLoginModal(){
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen
        })
    }

    handleLogin(event){
        this.toggleLoginModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    toggleRegisterModal(){
        this.setState({
            isRegisterModalOpen: !this.state.isRegisterModalOpen
        })
    }

    handleRegister(event){
        this.toggleRegisterModal();
        alert("FirstName: " + this.firstName.value + " LastName: " + this.lastName.value + " Email: "+ this.email.value
            + "password: " + this.password.value + " confirmPassword: " + this.confirmPassword.value+ " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    openSlideMenu(){
        document.getElementById('side-menu').style.width = '250px';
    }

    closeSlideMenu(){
        document.getElementById('side-menu').style.width = '0px';
    }

    render(){
        return(
            <div>
                <Navbar bg="light" expand="lg" fixed="top">
                    <span className="open-slide">
                        <a href="/" onClick={this.openSlideMenu}>
                            <svg width="30" height="30">
                                <path d="M0,5 30,5" stroke="#000" strokeWidth="3"/>
                                <path d="M0,14 30,14" stroke="#000" strokeWidth="3"/>
                                <path d="M0,23 30,23" stroke="#000" strokeWidth="3"/>
                            </svg>
                        </a>
                    </span>&nbsp;&nbsp;&nbsp;
                    <Navbar.Brand href="/">
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
                        <Nav.Link href="exploreCities">Explore Cities</Nav.Link>
                        <Nav.Link href="exploreIslands">Explore Islands</Nav.Link>
                        <Nav.Link href="exploreForests">Explore Forests</Nav.Link>
                        <Nav.Link href="exploreDeserts">Explore Deserts</Nav.Link>
                        <Nav.Link href="uploadPlace">Upload Place</Nav.Link>
                        <Nav.Link href="bloggers">Bloggers</Nav.Link>
                        <Nav.Link href="aboutUs">About Us</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search for places" className="mr-sm" />
                        <Nav>
                            <Nav.Link>
                            <Button variant="outline-success" onClick={this.toggleLoginModal}>Login</Button>
                            </Nav.Link>
                            <Nav.Link>
                            <Button variant="outline-success" onClick={this.toggleRegisterModal}>Register</Button>
                            </Nav.Link>
                        </Nav>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal}>
                    <ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>


                <Modal isOpen={this.state.isRegisterModalOpen} toggle={this.toggleRegisterModal}>
                    <ModalHeader toggle={this.toggleRegisterModal}>Register</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleRegister}>
                            <div className="row">
                                <FormGroup className="col-6">
                                    <Label htmlFor="firstName">FirstName</Label>
                                    <Input type="text" id="firstName" name="firstName"
                                    innerRef={(input) => this.firstName = input} />
                                </FormGroup>
                                <FormGroup className="col-6">
                                    <Label htmlFor="lastName">LastName</Label>
                                    <Input type="lastName" id="lastName" name="lastName"
                                    innerRef={(input) => this.lastName = input}  />
                                </FormGroup>
                            </div>
                            <div className="row">
                                <FormGroup className="col-12 justify-content-center">
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" name="email"
                                    innerRef={(input) => this.email = input}/>
                                </FormGroup>
                            </div>
                            <div className="row">
                                <FormGroup className="col-6">
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                                </FormGroup>
                                <FormGroup className="col-6">
                                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                                    <Input type="password" id="confirmPassword" name="confirmPassword"
                                    innerRef={(input) => this.confirmPassword = input}  />
                                </FormGroup>
                            </div>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Register</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default HeaderComponent;