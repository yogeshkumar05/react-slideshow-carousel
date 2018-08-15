import React from 'react';
import mockData from '../data/mockData.json';
import Main from './components/Main';
import '../styles/index.scss'
const MyComponent = (props) => {
    const config = props.config || {
        "data": mockData.images, 
        "infinite": true, 
        "tofro" : false, 
        "autoplay": true, 
        "idleTime" : 2000,
        "showCaption": true,
        "showSlideNum" : true,
        "showDots": true,
        "showArrows": 'both'
    };
    return <Main config={config}/>
};
export default MyComponent;