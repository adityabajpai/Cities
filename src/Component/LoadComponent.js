import React from 'react';
import HeaderComponent from './HeaderComponent';
import SliderComponent from './SliderComponent';
import FooterComponent from './FooterComponent';
import ExplorePlaces from './ExplorePlace';
import Bloggers from './Bloggers';
import UploadPlace from './UploadPlace';
import AboutUs from './AboutUs';
import MainComponent from './MainComponent';
import {Switch, Route} from 'react-router-dom';

class LoadComponent extends React.Component{
    render(){
        return(
            <div>
                <HeaderComponent/>
                <SliderComponent/>
                    <Switch>
                        <Route exact path="/exploreCities" component = {ExplorePlaces}/>
                        <Route exact path="/exploreIslands" component = {ExplorePlaces}/>
                        <Route exact path="/exploreForests" component = {ExplorePlaces}/>
                        <Route exact path="/exploreDeserts" component = {ExplorePlaces}/>
                        <Route exact path="/bloggers" component = {Bloggers}/>
                        <Route exact path="/uploadPlace" component = {UploadPlace}/>
                        <Route exact path="/aboutUs" component = {AboutUs}/>
                        <Route path="/" component={MainComponent} />
                    </Switch>
                <FooterComponent/>
            </div>
        );
    }
}

export default LoadComponent;