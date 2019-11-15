import React from 'react';
import '../Style/footer.css'

class FooterComponenet extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-ceter">
                        <div className="col-4 justify-content-center">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="http://localhost:3000/#">Browse Cities</a></li>
                                <li><a href="http://localhost:3000/#">Browse Islands</a></li>
                                <li><a href="http://localhost:3000/#">Browse Forests</a></li>
                                <li><a href="http://localhost:3000/#">Uppload Cities/Islands/Forests</a></li>
                                <li><a href="http://localhost:3000/#">Bloggers</a></li>
                                <li><a href="http://localhost:3000/#">About Us</a></li>
                            </ul>
                        </div>
                        <div className="col-4 justify-content-ceter">
                            <h5>Our Address</h5>
                            <address>
                                121, Abc def ghi jkl<br/>
                                Mnopqrstq<br/>
                                INDIA<br/>
                                <i className="fa fa-phone fa-lg"></i>: +91 01234 56789<br />
                                <i className="fa fa-fax fa-lg"></i>: +91 98765 43210<br />
                                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:cities@gmail.com">cities@gmail.com</a>
                            </address>
                        </div>
                        <div className="col-4 justify-content-center align-self-center">
                            Connect With Us:<br/>
                            <a href="http://google.com/+"><i className="fa fa-google-plus"></i></a>&nbsp;&nbsp;&nbsp;
                            <a href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>&nbsp;&nbsp;&nbsp;
                            <a href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>&nbsp;&nbsp;&nbsp;<br/>
                            <a href="http://twitter.com/"><i className="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;
                            <a href="http://youtube.com/"><i className="fa fa-youtube"></i></a>&nbsp;&nbsp;&nbsp;
                            <a href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                    <div className="row justify-content-center">             
                        <div className="col-auto">
                            <p>© Copyright 2018 Ristorante Con Fusion</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponenet;