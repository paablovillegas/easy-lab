import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startFetchPacientes } from '../../../../redux/actions/paciente';
import { FormPaciente } from './FormPaciente';
import { SearchPaciente } from './SearchPaciente';

export const ScreenPaciente = () => {
    const { pacientes, active } = useSelector(state => state.paciente);
    const [mostrarBarra, setMostrarBarra] = useState(true);
    const dispatch = useDispatch();

    const hideShowBarra = () => setMostrarBarra(!mostrarBarra);

    useEffect(() => {
        dispatch(startFetchPacientes())
    }, [dispatch]);

    console.log(pacientes, active);

    return (
        <div className='flex flex-1'>
            <SearchPaciente 
                active={active}
                mostrarBarra={mostrarBarra}
                data={pacientes}
            />
            {
                active &&
                <FormPaciente />
            }
        </div>
    )
}
