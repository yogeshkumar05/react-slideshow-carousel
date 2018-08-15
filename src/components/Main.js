import React, {Component} from 'react';
import CarouselDot from './CarouselDot';
import CarouselNextBtn from './CarouselNextBtn';
import CarouselPrevBtn from './CarouselPrevBtn';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {currentSlideIndex:0, forward: true, backward: false};
    }
    componentDidMount () {
        const that = this;
        this.slideshowHandle = this.props.config.autoplay && setInterval(function(){that.goToSlide(that.state.currentSlideIndex, false, true); }, this.props.config.idleTime);
    }
    goToSlide = (index, prev=false, next=false) => {
        const that = this;
        const totalImages = this.props.config.data.length;
        const {infinite, tofro, idleTime, autoplay} = this.props.config;
        if(infinite) {
            if(next) {
                index = (index + 1 ) % totalImages;
            } else if(prev) {
                index = index === 0 ? totalImages-1 : (index -1 ) % totalImages;
            }
        } else {
            if(next) {
                if(index !== totalImages-1) {
                    index = (index + 1 ) % totalImages;
                } else if(tofro && autoplay) {
                    clearInterval(this.slideshowHandle);
                    this.slideshowHandle2 = setInterval(function(){that.goToSlide(that.state.currentSlideIndex, true, false); }, idleTime);
                }
            } else if(prev) {
                if(index > 0)
                {
                    index = (index -1 ) % totalImages;
                } else if(tofro && autoplay) {
                    clearInterval(this.slideshowHandle);
                    clearInterval(this.slideshowHandle2);
                    this.slideshowHandle2 = setInterval(function(){that.goToSlide(that.state.currentSlideIndex, false, true); }, idleTime);
                }
            }
        }
        
        this.setState({currentSlideIndex:index});
    }
    getSlideDots() {
        const dotsArray =[];
        for(let i =0;i <this.props.config.data.length; i++){
            dotsArray.push(<CarouselDot key={i} index={i} currentSlideIndex={this.state.currentSlideIndex} goToSlide={this.goToSlide}/>);
        }
        return dotsArray;
    }
    render() {
        const {data, infinite, showCaption, showSlideNum, showDots, showArrows} = this.props.config;
        return(<div>
        <div className="container">
            {
            showSlideNum && <div className='numbertext'>{this.state.currentSlideIndex+1} / {data.length}</div>}
        <img className='fade' src={data[this.state.currentSlideIndex].src} alt="Snow"/>
        {
            (showArrows === 'both' || showArrows === 'prev') && (infinite || this.state.currentSlideIndex > 0) && <CarouselPrevBtn goToSlide={this.goToSlide} index ={this.state.currentSlideIndex}/>
        }
        {
            (showArrows === 'both' || showArrows === 'next') && (infinite || this.state.currentSlideIndex !== data.length-1) && <CarouselNextBtn goToSlide={this.goToSlide} index={this.state.currentSlideIndex}/>
        }
        {
            showCaption && <div className="centered">{data[this.state.currentSlideIndex].caption}</div>
        }
        <div className="dots-wrapper">
        {
          showDots && this.getSlideDots()
        }
        </div>
        </div>

<div className="clearfix"></div>
      </div>)
    }
}