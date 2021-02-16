import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { initialStateDoctor } from '../../../../../helper/states/initialDoctor';
import { RegularInput } from '../../../../forms/input-types/RegularInput';
import { SelectInput } from '../../../../forms/input-types/SelectInput';
import { ToggleSwitch } from '../../../../forms/input-types/ToggleSwitch';

const defaultDoctor = {
    value: '',
    name: '-- Seleccionar Doctor --',
};

export const DoctorForm = ({ active, setActive, doctor, setDoctor }) => {
    const { doctor: { doctores } } = useSelector(state => state);

    const [items, setItems] = useState([]);

    useEffect(() => {
        let items = doctores.map(i => ({
            value: i._id,
            name: `${i.nombre} ${i.apellido_paterno} ${i.apellido_materno || ''}`,
        }));
        items = [defaultDoctor, ...items];
        setItems(items);
    }, [doctores]);

    const handleChange = ({ target }) => {
        let newInst = doctores.find(i => i._id === target.value);
        newInst = {
            ...initialStateDoctor,
            ...newInst,
        }
        setDoctor(newInst);
    };

    return (
        <div className={`rounded-xl px-3 pt-3 pb-3 mx-4 mb-3 ${active ? 'shadow' : 'shadow-sm'}`}>
            <ToggleSwitch
                title='Doctor'
                active={active}
                setActive={setActive}
            />
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 pb-3 ${active ? 'block' : 'hidden'}`}>
                <hr className='md:col-span-2 lg:col-span-3 mt-3' />
                <div className='lg:col-span-2'>
                    <SelectInput
                        icon={faUser}
                        onChange={handleChange}
                        options={items}
                        title='Doctor'
                        value={doctor._id}
                        disabled={!active}
                        required={active}
                    />
                </div>
                <RegularInput
                    placeholder='Comisión'
                    icon={faUser}
                    value={doctor.comision}
                    disabled
                />
                <div className='lg:col-span-2'>
                    <RegularInput
                        placeholder='Correo'
                        icon={faUser}
                        value={doctor.correo}
                        disabled
                    />
                </div>
                <RegularInput
                    placeholder='Teléfono'
                    icon={faUser}
                    value={doctor.telefono}
                    disabled
                />
            </div>
        </div>
    );
}
