import { faAt, faFileInvoiceDollar, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { initialStateDoctor } from '../../../../../helper/states/initialDoctor';
import { enableDisableDoctor, setDoctor } from '../../../../../redux/actions/orden/newOrden';
import { RegularInput } from '../../../../forms/input-types/RegularInput';
import { SelectInput } from '../../../../forms/input-types/SelectInput';
import { ToggleSwitch } from '../../../../forms/input-types/ToggleSwitch';

const defaultDoctor = {
    value: '',
    name: '-- Seleccionar Doctor --',
};

export const DoctorForm = () => {
    const dispatch = useDispatch();
    const {
        orden: { active: { doctor_activo: active, doctor }, },
        doctor: { doctores }
    } = useSelector(state => state);

    const [items, setItems] = useState([]);

    useEffect(() => {
        let items = doctores.map(i => ({
            value: i._id,
            name: `${i.nombre} ${i.apellido_paterno} ${i.apellido_materno || ''}`,
        }));
        items = [defaultDoctor, ...items];
        setItems(items);
    }, [doctores]);

    const setActive = () => dispatch(enableDisableDoctor(active));

    const handleChange = ({ target }) => {
        let newDoctor = doctores.find(i => i._id === target.value);
        newDoctor = {
            ...initialStateDoctor,
            ...newDoctor,
        };
        dispatch(setDoctor(newDoctor));
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
                        icon={faAt}
                        value={doctor.correo}
                        disabled
                    />
                </div>
                <RegularInput
                    placeholder='Teléfono'
                    icon={faFileInvoiceDollar}
                    value={doctor.telefono}
                    disabled
                />
            </div>
        </div>
    );
}
