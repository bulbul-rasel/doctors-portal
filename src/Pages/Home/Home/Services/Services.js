import React from 'react';
import fluride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import treatment from '../../../../assets/images/treatment.png'
import Service from './Service';
import PrimaryButton from '../../../Shared/PrimaryButton/PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: '',
            img: fluride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: '',
            img: fluride
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: '',
            img: cavity
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='uppercase font-bold text-xl text-primary'>Our Services</h3>
                <h2 className='text-4xl'>Service we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-14'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 gap-10">
                    <figure>
                        <img src={treatment} alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <div className="card-actions justify-start">
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;