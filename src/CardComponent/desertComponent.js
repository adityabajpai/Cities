import React from 'react';
import {DESERTS} from '../shared/deserts';
import { Card, CardBody, CardHeader } from 'reactstrap';
import {Image} from 'react-bootstrap';

class desertComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            deserts: DESERTS
        }
    }

    render(){
        console.log('Yes');
        console.log('Deserts');
        const place = this.state.deserts;
        return place.map((desert, index)=>(
            <div key={index} class="container">
                <Card style={{padding:"20px", borderColor:"#ccc", marginTop:"10px", marginBottom:"50px"}}>
                    <br/>
                    <div class="row align-self-center">
                        <div class="col-8">
                            <h4>{desert.name}</h4>
                            <p>{desert.description}</p>
                            <Image width="100%" height="300px" src={desert.image[0]}/>
                        </div>
                        <div class="col-4 align-self-center">
                        <Card>
                            <CardHeader className="bg-primary text-white">Details of a City</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Size</dt>
                                    <dd className="col-6">{desert.size}</dd>
                                    <dt className="col-6">Location</dt>
                                    <dd className="col-6">{desert.country}</dd>
                                    <dt className="col-6">Continent</dt>
                                    <dd className="col-6">{desert.continents}</dd>
                                </dl>
                            </CardBody>
                        </Card>
                        </div>
                    </div>
                    <br/>
                </Card>
            </div>
        ));
    }
}

export default desertComponent;