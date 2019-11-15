import React from 'react';
import {CITIES} from '../shared/cities';
import {ISLANDS} from '../shared/islands';
import {FORESTS} from '../shared/forests';
import { Card, CardBody, CardHeader } from 'reactstrap';
import {Image} from 'react-bootstrap';

class ExplorePlaces extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            cities: CITIES,
            islands: ISLANDS,
            forests: FORESTS
        }
    }

    render(){
        console.log(window.location.pathname);
        console.log(window.location.href);
        if(window.location.pathname==='/exploreCities'){
            console.log('Cities');
            const place = this.state.cities;
            return place.map((city, index)=>(
                // <div key={index} className="container">
                //     <div>
                //         <h4 style={{marginLeft:"15px", marginTop:"15px"}}>{city.name}</h4>
                //         <p className="col-8">{city.description}</p>
                //         <Image className="col-8" height="300px" src={city.image[0]}/>
                //     </div>
                // </div>
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
        else if(window.location.pathname==='/exploreIslands'){
            console.log('Islands');
            const place = this.state.islands;
            return place.map((island, index)=>(
                // <div key={index} className="container">
                //     <div>
                //         <h4 style={{marginLeft:"15px", marginTop:"15px"}}>{city.name}</h4>
                //         <p className="col-8">{city.description}</p>
                //         <Image className="col-8" height="300px" src={city.image[0]}/>
                //     </div>
                // </div>
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
        else if(window.location.pathname==='/exploreForests'){
            console.log('Yes');
            console.log('Forests');
            const place = this.state.forests;
            return place.map((forest, index)=>(
                // <div key={index} className="container">
                //     <div>
                //         <h4 style={{marginLeft:"15px", marginTop:"15px"}}>{city.name}</h4>
                //         <p className="col-8">{city.description}</p>
                //         <Image className="col-8" height="300px" src={city.image[0]}/>
                //     </div>
                // </div>
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
        else if(window.location.pathname==='/exploreDeserts'){
            console.log('Yes');
        }
    }
}

export default ExplorePlaces;