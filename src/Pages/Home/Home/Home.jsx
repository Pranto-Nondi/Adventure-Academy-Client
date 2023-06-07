import React from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;