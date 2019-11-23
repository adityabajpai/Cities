import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import '../Style/slide.css'

const image = [
    'https://media.cntraveler.com/photos/5ca60ffcdba130da42d0d834/master/w_820,c_limit/Shanghai_GettyImages-936093364.jpg',
    'https://themysteriousworld.com/wp-content/uploads/2017/06/arabian-desert.webp',
    'https://assets3.thrillist.com/v1/image/1674642/size/tl-horizontal_main.jpg',
    'https://www.planetware.com/photos-large/SEY/best-islands-maldives.jpg',
    'https://media.cntraveler.com/photos/5ca50d2b274132cadc073bf8/master/w_820,c_limit/Jaipur-India_GettyImages-484718881.jpg',
    'https://assets3.thrillist.com/v1/image/1674636/size/tl-horizontal_main.jpg',
    'https://www.planetware.com/photos-large/SEY/best-islands-bali.jpg'
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