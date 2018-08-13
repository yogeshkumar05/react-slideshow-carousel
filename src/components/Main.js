import React, {Component} from 'react';
import mockData from './mockData.json';
import CarouselDot from './CarouselDot';
import CarouselNextBtn from './CarouselNextBtn';
import CarouselPrevBtn from './CarouselPrevBtn';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {currentSlideIndex:0};
    }
    componentWillMount () {
        const that = this;
        setInterval(function(){that.goToSlide(that.state.currentSlideIndex, false, true); }, 3000);
    }
    goToSlide = (index, prev=false, next=false) => {
        const totalImages = mockData.images.length;
        if(next) {
            index = (index + 1 ) % totalImages;
        } else if(prev) {
            index = index === 0 ? totalImages-1 : (index -1 ) % totalImages;
        }
        this.setState({currentSlideIndex:index});
    }
    getSlideDots() {
        const dotsArray =[];
        for(let i =0;i <mockData.images.length; i++){
            dotsArray.push(<CarouselDot index={i} currentSlideIndex={this.state.currentSlideIndex} goToSlide={this.goToSlide}/>);
        }
        return dotsArray;
    }
    render() {
        console.log(mockData);
        return(<div>
        <div className="container">
        <img className='fade' src={mockData.images[this.state.currentSlideIndex]} alt="Snow"/>
        <CarouselPrevBtn goToSlide={this.goToSlide} index ={this.state.currentSlideIndex}/>
        <CarouselNextBtn goToSlide={this.goToSlide} index={this.state.currentSlideIndex}/>
        <div className="centered">Some Text about the slide</div>
        <div className="dots-wrapper">
        {
           this.getSlideDots()
        }
        </div>
        </div>

<div className="clearfix"></div>
      </div>)
    }
}