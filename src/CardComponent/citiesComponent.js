import React from 'react';
import {CITIES} from '../shared/cities';
import { Card, CardBody, CardHeader } from 'reactstrap';
import {Image} from 'react-bootstrap';

class desertComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cities: CITIES
        }
    }

    render(){
        console.log('Cities');
        const place = this.state.cities;
        return place.map((city, index)=>(
            <div key={index} class="container">
                <Card style={{padding:"20px", borderColor:"#ccc", marginTop:"10px", marginBottom:"50px"}}>
                    <br/>
                    <div class="row">
                        <div class="col-8 align-self-center">
                            <h4>{city.name}</h4>
                            <p>{city.description}</p>
                            <Image width="100%" height="300px" src={city.image[0]}/>
                        </div>
                        <div class="col-4 align-self-center">
                        <Card>
                            <CardHeader className="bg-primary text-white">Details of a City</CardHeader>
                            <CardBody>
                                <dl className="row p-1">
                                    <dt className="col-6">Population</dt>
                                    <dd className="col-6">{city.population}</dd>
                                    <dt className="col-6">Country</dt>
                                    <dd className="col-6">{city.country}</dd>
                                    <dt className="col-6">Capital</dt>
                                    <dd className="col-6">{city.capital}</dd>
                                    <dt className="col-6">Continent</dt>
                                    <dd className="col-6">{city.continents}</dd>
                                    <dt className="col-6">Things to do</dt>
                                    <dd className="col-6">{city.thingsToDo}</dd>
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