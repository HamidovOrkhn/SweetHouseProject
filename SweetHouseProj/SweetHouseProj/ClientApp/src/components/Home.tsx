import * as React from 'react';
import { connect } from 'react-redux';
import HomeWelcome from './home/HomeWelcome';
import HomeAboutUs from './home/HomeAboutUs';
import HomeVideo from './home/HomeVideo';
import HomeFacilities from './home/HomeFacilities';
import HotelCards from './home/HotelCards';
const Home = () => (
    <React.Fragment>
        <HomeWelcome />
        <HomeAboutUs />
        <HotelCards />
        <HomeFacilities/>
        <HomeVideo />
    </React.Fragment>
    
    
);

export default connect()(Home);
