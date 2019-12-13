import React from 'react';
import logo from '../logo.svg';
import '../Style/sideNav.css'
import {Navbar, Nav, Form, FormControl, Button, Image} from 'react-bootstrap';
import {ModalHeader, ModalBody, Modal, FormGroup, Label, Input, FormFeedback} from 'reactstrap';
import NavLink from 'react-bootstrap/NavLink';
import axios from 'axios';


class HeaderComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          isLoginModalOpen: false,
          isRegisterModalOpen: false,
          isLoggedIn: false,
          login: {
              email: '',
              password: '',
          },
          register: {
              name: '',
              email: '',
              password: '',
          }
        };
        this.openSlideMenu = this.openSlideMenu.bind(this);
        this.closeSlideMenu = this.closeSlideMenu.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleLoginModal(){
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen,
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    handleLogin(event){
        this.toggleLoginModal();
        this.setState(prevState=>(
            {
                login: {
                    ...prevState.login,
                    email: this.email.value,
                    password: this.password.value
                }
            }
        ))
        var temp = this.state.login.email;
        if(temp.length>0)
        {
            // alert("Username: " + this.username.value + " Password: " + this.password.value
            //     + " Remember: " + this.remember.checked+" isLoggedIn "+this.state.isLoggedIn+ "isLoginModalOpen "+this.state.isLoginModalOpen);
            axios.post('http://localhost:3000/api/user/login',{email: this.state.login.email, password: this.state.login.password})
            .then((response)=>{
                alert(JSON.stringify(response))
                document.getElementById('loginButton').style.visibility = 'hidden';
                document.getElementById('registerButton').style.visibility = 'hidden';
                document.getElementById('loginButton').style.display = 'none';
                document.getElementById('registerButton').style.display = 'none';
                document.getElementById('logoutButton').style.visibility = 'visible';
                document.getElementById('logoutButton').style.display = 'inline-block';
            })
            .catch((error)=>{
                alert(JSON.stringify(error))
            })
        }
        event.preventDefault();
    }


    toggleRegisterModal(){
        this.setState({
            isRegisterModalOpen: !this.state.isRegisterModalOpen,
            isLoggedIn: !this.state.isLoggedIn
        })
    }

    handleRegister(event){
        this.toggleRegisterModal();
        this.setState(prevState=>(
            {
                register: {
                    ...prevState.register,
                    name: this.firstName.value+" "+this.lastName.value,
                    email: this.email.value,
                    password: this.password.value
                }
            })
        )
        this.setState(prevState=>(
            {
                login: {
                    ...prevState.login,
                    email: this.email.value,
                    password: this.password.value
                }
            }
        ))
        // alert(JSON.stringify(this.state.register));
        var temp = this.state.register.name;
        // alert(JSON.stringify(this.state.register))
        if(temp.length>0)
        {
            axios.post('http://localhost:3000/api/user/register',{name: this.state.register.name, email: this.state.register.email, password: this.state.register.password})
            .then((response)=>{
                // alert(JSON.stringify(response))
                axios.post('http://localhost:3000/api/user/login',{email: this.state.login.email, password: this.state.login.password})
                .then((response)=>{
                    alert(JSON.stringify(response))
                    document.getElementById('loginButton').style.visibility = 'hidden';
                    document.getElementById('registerButton').style.visibility = 'hidden';
                    document.getElementById('loginButton').style.display = 'none';
                    document.getElementById('registerButton').style.display = 'none';
                    document.getElementById('logoutButton').style.visibility = 'visible';
                    document.getElementById('logoutButton').style.display = 'inline-block';
                    console.log(this.state.register.name+"\n"+this.state.register.email+"\n"+this.state.register.password);
                })
                .catch((error)=>{
                    alert(JSON.stringify(error))
                })
            })
            .catch((error)=>{
                alert(JSON.stringify(error))
            })
            // fetch('http://localhost:3000/api/user/register',{
            //     method: 'post',
            //     headers: {
            //         'Accept': 'appli+cation/json, text/plain, */*',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(this.state.register)
            // })
            // .then((response)=>{
            //     alert(response)
            // })
            // .catch((error)=>{
            //     alert(error)
            // })
        }
        // alert(this.state.register.name+"\n"+this.state.register.email+"\n"+this.state.register.password);
        // alert("FirstName: " + this.firstName.value + " LastName: " + this.lastName.value + " Email: "+ this.email.value
        //     + "password: " + this.password.value + " confirmPassword: " + this.confirmPassword.value+ " Agree: " + this.agree.checked
        //     +" isLoggedIn "+this.state.isLoggedIn);
        event.preventDefault();
    }

    handleLogout(){
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
        alert("isLoggedIn "+this.state.isLoggedIn)
        document.getElementById('loginButton').style.visibility = 'visible';
        document.getElementById('registerButton').style.visibility = 'visible';
        document.getElementById('loginButton').style.display = 'inline-block';
        document.getElementById('registerButton').style.display = 'inline-block';
        document.getElementById('logoutButton').style.visibility = 'hidden';
        document.getElementById('logoutButton').style.display = 'none';
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
                        <a onClick={this.openSlideMenu}>
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
                        {' PERI'}
                    </Navbar.Brand>
                    <div id="side-menu" className="side-nav">
                        <a href="#" className="btn-close" onClick={this.closeSlideMenu}>&times;</a>
                        <a href="#asia" onClick={this.closeSlideMenu}>Asia</a>
                        <a href="#europe" onClick={this.closeSlideMenu}>Europe</a>
                        <a href="#australia" onClick={this.closeSlideMenu}>Australia</a>
                        <a href="#antarctica" onClick={this.closeSlideMenu}>Antarctica</a>
                        <a href="#northAmerica" onClick={this.closeSlideMenu}>North America</a>
                        <a href="#southAmerica" onClick={this.closeSlideMenu}>South America</a>
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
                                    <Button variant="outline-success" id="loginButton" onClick={this.toggleLoginModal}>
                                        <span className="fa fa-sign-in fa-lg">&nbsp;</span>Login
                                    </Button>
                                </Nav.Link>
                                <Nav.Link>
                                    <Button variant="outline-success" id="registerButton" onClick={this.toggleRegisterModal}>
                                        <span className="fa fa-registered fa-lg">&nbsp;</span>Register
                                    </Button>
                                </Nav.Link>
                                <NavLink>
                                    <Button variant="outline-success" id="logoutButton" style={{visibility:'hidden',display:'none'}} onClick={this.handleLogout}>
                                        <span className="fa fa-sign-out fa-lg">&nbsp;</span>Sign Out
                                    </Button>
                                </NavLink>
                            </Nav>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal}>
                    <ModalHeader toggle={this.toggleLoginModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" id="email" name="email" innerRef={(input) => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}  />
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
                                <Input type="checkbox" name="agree"
                                    innerRef={(input) => this.agree = input}  />
                                    Agree to terms and conditions
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