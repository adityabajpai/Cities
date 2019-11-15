import React from 'react';
import '../Style/aboutUs.css';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import { Form } from 'react-bootstrap';

class AboutUs extends React.Component{
    render(){
        return(
            <div className="container">
                <h3 className="heading">About Us</h3>
                <div className="row align-items-center" style={{padding:"15px"}}>
                    <div className="col-8">
                        <p>We designed this website to provide local city and state information. This information is constantly being added and updated. Soon we will have a larger database providing you, the user, with useful city and state specific information.</p>
                    </div>
                    <div className="col-4">
                        <Card>
                            <CardHeader className="bg-primary text-white">Countries With Maximum Tourism</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">India</dt>
                                    <dd className="col-6">25%</dd>
                                    <dt className="col-6">America</dt>
                                    <dd className="col-6">20%</dd>
                                    <dt className="col-6">Japan</dt>
                                    <dd className="col-6">15%</dd>
                                </dl>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="col-12" style={{marginTop:"25px"}}>
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">TRAVEL IS  FATAL TO PREJUDICE, BIGOTRY, AND NARROW MINDEDNESS., AND MANY OF OUR PEOPLE NEED IT SORELY ON THESE ACCOUNTS</p>
                                <footer className="blockquote-footer">Mark Twain,
                                <cite title="Source Title">The Wit and Wisdom of Mark Twain,
                                    Oprah Winfrey's “O Magazine”</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
                <hr style={{marginTop:"50px"}}/>
                <h4 style={{padding:"5px"}}>Send Us your feedback</h4>
                <div className="container" >
                    <Form>
                        <div className="input-group">
                            <div className="input-group-prepend col-6">
                                <span className="input-group-text col-3 justify-content-center" id="">Username</span>
                                <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <br/>
                        <div className="input-group">
                            <div className="input-group-prepend col-6">
                                <span className="input-group-text col-3 justify-content-center" id="">Contact No.</span>
                                <input type="number" class="form-control"/>
                            </div>
                        </div>
                        <br/>
                        <div className="input-group">
                            <div className="input-group-prepend col-6">
                                <span className="input-group-text col-3 justify-content-center" id="">Email</span>
                                <input type="email" class="form-control"/>
                            </div>
                        </div>
                        <br/>
                        <div class="form-check row">
                            <div className="row">
                                <div className="col-3" style={{marginLeft:"30px"}}>
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">May we contact you?</label>
                                </div>
                                <div className="col-2">
                                    <select class="custom-select" id="inputGroupSelect02">
                                        <option selected>Choose...</option>
                                        <option value="1">Tel.</option>
                                        <option value="2">Email</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group col-6">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </Form>
                    <br/>
                </div>
            </div>
        );
    }
}

export default AboutUs;