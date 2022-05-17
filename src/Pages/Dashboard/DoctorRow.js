import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    const { name, img, specialty, email, refetch } = doctor;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-sm btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;