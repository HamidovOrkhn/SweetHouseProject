import * as React from 'react';
import { connect } from 'react-redux';
import HomeWelcome from './home/HomeWelcome';
import HomeAboutUs from './home/HomeAboutUs';
import HomeVideo from './home/HomeVideo';
import HomeFacilities from './home/HomeFacilities';
import HotelCards from './home/HotelCards';
import BlogList from './home/BlogList';
import PostsSlider from './home/PostsSlider';
const Home = () => (
    <React.Fragment>
        <HomeWelcome />
        <HomeAboutUs />
        <HotelCards />
        <HomeFacilities/>
        <HomeVideo />
        <BlogList />
        <PostsSlider/>
    </React.Fragment>
    
    
);

export default connect()(Home);
