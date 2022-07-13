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
import RoomDetails from './components/rooms/RoomDetails';
import BlogsDetails from './components/blogs/BlogsDetails';
import Blogs from './components/blogs/Blogs';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
export default () => (
    <Layout>
        <I18nextProvider i18n={i18n}>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/aboutus' component={AboutUs} />
            <Route exact path='/rooms' component={Rooms} />
            <Route exact path='/blogs' component={Blogs} />
            <Route path='/rooms/details/:slug' component={RoomDetails} />
            <Route path='/blogs/details/:slug' component={BlogsDetails} />
            <Route path='/contactus' component={ContactUs} />
            <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        </I18nextProvider>

    </Layout>
);
