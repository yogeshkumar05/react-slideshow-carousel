# react-slideshow-carousel
simple &amp; easy to use customizable slideshow carousel built using ReactJS

# Installation
```javascript
npm i react-slideshow-carousel --save
```

Also install node-sass & sass-loader if already not installed in your application
```javascript
npm i node-sass sass-loader --save
```

# Usage
```javascript
import React, Component from 'react';
import ReactCarousel from 'react-slideshow-carousel';

export default function MyComponent (props) {
    const myImages = ['assets/image1', 'assets/image2'];// an array of image paths
    const myConfig = {
        "data": myImages, 
        "infinite": true, 
        "tofro" : false, 
        "autoplay": true, 
        "idleTime" : 3000, // 3 seconds
        "showCaption": true,
        "showSlideNum" : true,
        "showDots": true,
        "showArrows": 'both'
    };
    return <MyComponent config = {myConfig}/>;
}
```
# Options
all the below configuration options (settings) should be passed as props in the form of an object named 'config' as shown in the example above.

1. **data** : an array of image paths

2. **infinite** : a boolean to specify whether infinite looping is on or off
    * possible values: true | false ; true by default

3. **tofro** : a boolean to specify whether to & fro oscillation of slides should be enabled. 
    * possible values: true | false ; false by default
    * 'infinite' has highest priority than 'tofro', hence if 'inifnite' is true, the value of 'tofro' will not be conisdered
    * If 'inifinite' is false and 'tofro' is true, the slideshow will move back & forth after reaching the edge slides, e.g,         when the slideshow reaches the last slide, it will move back one slide at a time till the beginning, and again toward         the end
    * 'autoplay' should be true for 'tofro' to work
    
4. **autoplay** : a boolean to indicate if the slideshow should play automatically
    * possible values: true | false ; true by default
    * If this value is false, user has to manually click the dots or arrows to move to corresponding slide

5. **idleTime** : time in milliseconds to specify how long a slide should appear, before moving to the next
    * possible values: any number > 0 ; default value is 3000, which is equal to 3 seconds

6. **showCaption** : a boolean value to specify if a caption should be displayed for each slide
     * possible values: true | false ; true by default

7. **showSlideNum** : a boolean to specify the number of slides
     * possible values: true | false ; true by default
     * If the value is true, a number will indicate the current slide number & total number of slides, eg., 2/5 means current        slide is 2 and total number of slides is 5

8. **showDots** : a boolean to show or hide the carousel dots
    * possible values: true | false ; true by default
    * if this value is false, the carousel dots will be hidden

9. **showArrows** : a string value to show or hide the carousel arrows.
    * possible values: 'both' | 'prev' | 'next' ; default value is 'both', which means both the left and right arrows       will be visible
    * if this value is 'next', only the right/next arrow will be visible
    * if this value is 'prev', only the left/prev arrow will be visible
     

# Test the code
1. git clone https://github.com/yogeshkumar05/react-slideshow-carousel.git
2. npm install
3. npm start
4. launch http://localhost:3001/
    
# Demo is published at 
https://yogeshkumar05.github.io/react-slideshow-carousel/
