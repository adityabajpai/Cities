import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck, CardBody} from 'reactstrap';
import '../Style/mainComponent.css'

const cities = "A city is a large human settlement. It can be defined as a permanent and densely settled place with administratively defined boundaries whose members work primarily on non-agricultural tasks. Cities generally have extensive systems for housing, transportation, sanitation, utilities, land use, and communication.";
const islands = "An island or isle is any piece of sub-continental land that is surrounded by water. Very small islands such as emergent land features on atolls can be called islets, skerries, cays or keys. An island in a river or a lake island may be called an eyot or ait, and a small island off the coast may be called a holm.";
const forests = "A forest is a large area dominated by trees. Hundreds of more precise definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing and ecological function.";

class MainComponent extends React.Component{

    render(){
        return (
            <div className="design">
                <CardDeck>
                    <Card>
                    <CardImg top width="100%" height="300px" src="https://assets.entrepreneur.com/content/3x2/2000/20150513235008-new-york-city-life-sunrise-skyline-sunset.jpeg?width=1000" alt="Card image cap" />
                    <CardBody>
                        <CardTitle><b>Cities</b></CardTitle>
                        <CardText>{cities}</CardText>
                        <Button>Explore Cities</Button>
                    </CardBody>
                    </Card>
                    <Card>
                    <CardImg top width="100%" height="300px" src="https://www.bestattravel.co.uk/the-edit/wp-content/uploads/2018/09/best-island-maldives.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle><b>Islands</b></CardTitle>
                        <CardText>{islands}.</CardText>
                        <Button>Explore Islands</Button>
                    </CardBody>
                    </Card>
                    <Card>
                    <CardImg top width="100%" height="300px" src="https://media.mnn.com/assets/images/2015/08/union-wood-sunrise.jpg.653x0_q80_crop-smart.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle><b>Forests</b></CardTitle>
                        <CardText>{forests}</CardText>
                        <Button>Explore Forests</Button>
                    </CardBody>
                    </Card>
                </CardDeck>
            </div>
        );        
    }
}

export default MainComponent;