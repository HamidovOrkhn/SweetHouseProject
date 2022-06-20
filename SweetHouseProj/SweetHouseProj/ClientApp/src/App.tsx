import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import AboutUs from './components/aboutus/AboutUs';
import FetchData from './components/FetchData';
import Rooms from './components/rooms/Rooms';
import ContactUs from './components/contactus/ContactUs';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/rooms' component={Rooms} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
