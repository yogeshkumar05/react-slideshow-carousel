
import React from 'react';
export default function CarouselPrevBtn(props) {
    const {goToSlide, index} = props;
    return(
        <div className="prev" onClick={()=>goToSlide(index, true, false)}>&#10094;</div>
    );
}
