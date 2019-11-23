import React from 'react';
import {FORESTS} from '../shared/forests';
import { Card, CardBody, CardHeader } from 'reactstrap';
import {Image} from 'react-bootstrap';

class forestComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            forests: FORESTS
        }
    }

    render(){
        console.log('Yes');
        console.log('Forests');
        const place = this.state.forests;
        return place.map((forest, index)=>(
            <div key={index} class="container">
                <Card style={{padding:"20px", borderColor:"#ccc", marginTop:"10px", marginBottom:"50px"}}>
                    <br/>
                    <div class="row">
                        <div class="col-8 align-self-center">
                            <h4>{forest.name}</h4>
                            <p>{forest.description}</p>
                            <Image width="100%" height="300px" src={forest.image[0]}/>
                        </div>
                        <div class="col-4 align-self-center">
                            <Card>
                                <CardHeader className="bg-primary text-white">Details of a City</CardHeader>
                                <CardBody>
                                    <dl className="row p-1">
                                        <dt className="col-6">Population</dt>
                                        <dd className="col-6">{forest.population}</dd>
                                        <dt className="col-6">Country</dt>
                                        <dd className="col-6">{forest.country}</dd>
                                        <dt className="col-6">Capital</dt>
                                        <dd className="col-6">{forest.capital}</dd>
                                        <dt className="col-6">Things to do</dt>
                                        <dd className="col-6">{forest.thingsToDo}</dd>
                                    </dl>
                                </CardBody>
                            </Card>
                            <br/>
                            <div className="container">
                                <label><b>Best accessed from</b></label>
                                <p>{forest.bestAccessedFrom}</p>
                            </div>
                            <div className="container">
                                <label><b>Best Hike</b></label>
                                <p>{forest.bestHike}</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                </Card>
            </div>
        ));
    }
}

export default forestComponent;