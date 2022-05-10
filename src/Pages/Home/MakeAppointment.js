import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex  justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an appointment Today</h2>
                <p className='text-white pb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus neque, consequatur ex tempore quod perferendis in laboriosam nemo? Enim illo quam suscipit ducimus. Ratione odit sit possimus praesentium, iste iusto dolorem libero reiciendis sint nostrum labore repudiandae. Earum, atque ducimus?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;