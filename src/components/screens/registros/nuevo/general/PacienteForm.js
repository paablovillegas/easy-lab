import { faAt, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { initialStatePaciente } from '../../../../../helper/states/initialPaciente';
import { RegularInput } from '../../../../forms/input-types/RegularInput';
import { SelectInput } from '../../../../forms/input-types/SelectInput';

const defaultPaciente = {
    value: '',
    name: '-- Seleccionar Paciente --',
};

export const PacienteForm = () => {
    const { paciente: { pacientes } } = useSelector(state => state);

    const [items, setItems] = useState([]);

    //TODO: Cambiar de lugar
    const [paciente, setPaciente] = useState({
        ...initialStatePaciente,
        _id: '',
    });

    useEffect(() => {
        let items = pacientes.map(i => ({
            value: i._id,
            name: `${i.nombre} ${i.apellido_paterno} ${i.apellido_materno || ''}`,
        }));
        items = [defaultPaciente, ...items];
        setItems(items);
    }, [pacientes]);

    const handleChange = ({ target }) => {
        let newInst = pacientes.find(i => i._id === target.value);
        newInst = {
            ...initialStatePaciente,
            ...newInst,
        }
        setPaciente(newInst);
    };

    return (
        <div className='rounded-xl shadow p-3 mx-4 mb-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 mb-3'>
                <p className='text-lg'>Paciente</p>
                <div className='md:col-span-2 lg:col-span-3'>
                    <SelectInput
                        icon={faUser}
                        onChange={handleChange}
                        options={items}
                        value={paciente._id}
                        title='Paciente'
                        required
                    />
                </div>
                <div className='lg:col-span-2'>
                    <RegularInput
                        placeholder='Correo'
                        icon={faAt}
                        value={paciente.correo}
                        disabled
                    />
                </div>
                <RegularInput
                    placeholder='Teléfono'
                    icon={faPhoneAlt}
                    value={paciente.telefono}
                    disabled
                />
            </div>
        </div>
    );
}
