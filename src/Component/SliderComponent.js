import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import '../Style/slide.css'

const image = [
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
    "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"
];

let i = 0;

class SlideShow extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedImage: image[i],
        };
    }

    componentDidMount(){
        
        setInterval(()=>{
            if(i<image.length-1){
                console.log("Value of i "+i);
                console.log("selectedImage is "+this.state.selectedImage);
                i++;
                this.setState({
                    selectedImage: image[i]
                })
            }else
            {
                i=0;
            }
        },2500)
    }

    render(){
        return(
            <div className = "slide">
                <Image height="300px" width="100%" src={this.state.selectedImage} />
            </div>
        )
    }
}

export default SlideShow;