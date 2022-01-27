import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeBlogs from '../HomeBlogs/HomeBlogs';
import OurService from '../OurService/OurService';

const Home = () => {
    return (
        <div>
            {/* <OurService></OurService>
             <HomeBlogs></HomeBlogs> */}
             <HomeBanner></HomeBanner>
             <OurService></OurService>
             <HomeBlogs></HomeBlogs>
        </div>
    );
};

export default Home;