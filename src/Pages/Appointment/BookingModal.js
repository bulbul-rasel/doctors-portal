import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();

        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Booking: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 mt-3 gap-2 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-ghost w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-ghost w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email address" className="input input-ghost w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-ghost w-full max-w-xs" />
                        <input type="submit" placeholder="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;