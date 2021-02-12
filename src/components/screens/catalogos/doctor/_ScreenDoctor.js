import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startFetchDoctores } from '../../../../redux/actions/doctor';
import { FormDoctor } from './FormDoctor';
import { SearchDoctor } from './SearchDoctor';

export const ScreenDoctor = () => {
    const { doctores, active } = useSelector(state => state.doctor);
    const [mostrarBarra, setMostrarBarra] = useState(true);
    const dispatch = useDispatch();

    const hideShowBarra = () => setMostrarBarra(!mostrarBarra);

    useEffect(() => {
        dispatch(startFetchDoctores())
    }, [dispatch]);

    console.log(doctores, active);

    return (
        <div className='flex flex-1'>
            <SearchDoctor 
                active={active}
                mostrarBarra={mostrarBarra}
                data={doctores}
            />
            {
                active &&
                <FormDoctor />
            }
        </div>
    )
}
