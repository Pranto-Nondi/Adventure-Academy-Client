import React from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import ExtraSection from '../ExtraSection/ExtraSection';



const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <ExtraSection></ExtraSection>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>

        </div>
    );
};

export default Home;