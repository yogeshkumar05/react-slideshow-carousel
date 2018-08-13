import React from 'React';
export default function CarouselDot(props) {
    const {index, currentSlideIndex, goToSlide} = props;
    return(
        <div key={index} onClick={()=>goToSlide(index)} className={index===currentSlideIndex ? "dotActive" : "dot"}/>
    );
}