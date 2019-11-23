import React from 'react';
import {ISLANDS} from '../shared/islands';
import { Card, CardBody, CardHeader } from 'reactstrap';
import {Image} from 'react-bootstrap';

class islandComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            islands: ISLANDS
        }
    }

    render(){
        console.log('Islands');
            const place = this.state.islands;
            return place.map((island, index)=>(
                <div key={index} class="container">
                    <Card style={{padding:"20px", borderColor:"#ccc", marginTop:"10px", marginBottom:"50px"}}>
                        <br/>
                        <div class="row align-self-center">
                            <div class="col-8">
                                <h4>{island.name}</h4>
                                <p>{island.description}</p>
                                <Image width="100%" height="300px" src={island.image[0]}/>
                            </div>
                            <div class="col-4 align-self-center">
                            <Card>
                                <CardHeader className="bg-primary text-white">Details of a City</CardHeader>
                                <CardBody>
                                    <dl className="row p-1">
                                        <dt className="col-6">Population</dt>
                                        <dd className="col-6">{island.population}</dd>
                                        <dt className="col-6">Country</dt>
                                        <dd className="col-6">{island.country}</dd>
                                        <dt className="col-6">Capital</dt>
                                        <dd className="col-6">{island.capital}</dd>
                                        <dt className="col-6">Things to do</dt>
                                        <dd className="col-6">{island.thingsToDo}</dd>
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

export default islandComponent;