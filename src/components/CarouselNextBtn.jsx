
import React from 'react';
export default function CarouselNextBtn(props) {
    const {goToSlide, index} = props;
    return(
        <div className="next" onClick={()=>goToSlide(index, false, true)}>&#10095;</div>
    );
}
