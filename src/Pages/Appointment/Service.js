import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 ?
                        <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try Another Date.</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">

                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        for="booking-modal"
                        class="btn btn-secondary text-white uppercase">
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;