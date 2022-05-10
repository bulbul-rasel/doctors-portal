import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment';
import Testimonials from '../Testimonials';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='px-12'>

            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>

        </div>
    );
};

export default Home;