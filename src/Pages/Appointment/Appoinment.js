import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppoitmentBanner from './AppoitmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appoinment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppoitmentBanner date={date} setDate={setDate}></AppoitmentBanner>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;