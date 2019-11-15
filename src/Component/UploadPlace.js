import React from 'react';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import { Form } from 'react-bootstrap';

class UploadPlace extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <Form>
                    <div className="input-group justify-content-center">
                        <div className="input-group-prepend col-6">
                            <span className="input-group-text col-3 justify-content-center" id="" placeholder="Enter City Name">City Name</span>
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="input-group justify-content-center">
                        <div className="input-group-prepend col-6">
                            <span className="input-group-text col-3 justify-content-center" id="" placeholder="Enter City Population">Population</span>
                            <input type="number" class="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="input-group justify-content-center">
                        <div className="input-group-prepend col-6">
                            <span className="input-group-text col-3 justify-content-center" id="" placeholder="Enter Country Name">Country Name</span>
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="input-group justify-content-center">
                        <div className="input-group-prepend col-6">
                            <span className="input-group-text col-3 justify-content-center" id="" placeholder="Enter Country Capital">Country Capital</span>
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="input-group justify-content-center">
                        <div className="input-group-prepend col-6">
                            <span className="input-group-text col-3 justify-content-center" id="">Enter picture URL</span>
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <br/>
                    <div className="form-group col-6 justify-content-center">
                        <label for="exampleFormControlTextarea1">Best Things to do</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </Form>
            </div>
        );
    }
}

export default UploadPlace;