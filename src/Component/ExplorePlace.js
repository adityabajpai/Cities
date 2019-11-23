import React from 'react';
import citiesComponent from '../CardComponent/citiesComponent';
import islandComponent from '../CardComponent/islandComponent';
import desertComponent from '../CardComponent/desertComponent';
import forestComponent from '../CardComponent/forestComponent';
import { Card, CardBody, CardHeader } from 'reactstrap';
import {Image} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return{
        cities: state.cities,
        islands: state.islands,
        forests: state.forests,
        deserts: state.deserts
    }
}

class ExplorePlaces extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log(window.location.pathname);
        console.log(window.location.href);
        if(window.location.pathname==='/exploreCities'){
            console.log('Cities');
            const place = this.props.cities;
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
        else if(window.location.pathname==='/exploreIslands'){
            console.log('Islands');
            const place = this.props.islands;
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
        else if(window.location.pathname==='/exploreForests'){
            console.log('Yes');
            console.log('Forests');
            const place = this.props.forests;
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
        else if(window.location.pathname==='/exploreDeserts'){
            console.log('Yes');
            console.log('Deserts');
            const place = this.props.deserts;
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
}

export default withRouter(connect(mapStateToProps)(ExplorePlaces));