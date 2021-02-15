import { faIndustry, faPercentage } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { initialStateInsitucion } from '../../../../../helper/states/initialInstitucion';
import { RegularInput } from '../../../../forms/input-types/RegularInput';
import { SelectInput } from '../../../../forms/input-types/SelectInput';
import { ToggleSwitch } from '../../../../forms/input-types/ToggleSwitch';

const defaultInstitucion = {
    value: '',
    name: '-- Seleccionar Institucion --',
};

export const InstitucionForm = ({ active, setActive }) => {
    const { institucion: { instituciones } } = useSelector(state => state);

    const [items, setItems] = useState([]);

    //TODO: Cambiar de lugar
    const [institucion, setInstitucion] = useState({
        ...initialStateInsitucion,
        _id: '',
    });

    useEffect(() => {
        let items = instituciones.map(i => ({
            value: i._id,
            name: i.institucion,
        }));
        items = [defaultInstitucion, ...items];
        setItems(items);
    }, [instituciones]);

    const handleChange = ({target}) => {
        const newInst = instituciones.find(i => i._id === target.value);
        setInstitucion(newInst);
    };

    return (
        <div className={`rounded-xl p-3 mx-4 mb-3 ${active ? 'shadow' : 'shadow-sm'}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4  mb-3'>
                <div className='md:col-span-2 lg:col-span-3'>
                    <ToggleSwitch
                        title='Institucion'
                        active={active}
                        setActive={setActive}
                    />
                </div>
                <div className='lg:col-span-2'>
                    <SelectInput
                        title='Institucion'
                        icon={faIndustry}
                        value={institucion._id}
                        options={items}
                        onChange={handleChange}
                        disabled={!active}
                        required
                    />
                </div>
                <RegularInput
                    placeholder='Descuento'
                    icon={faPercentage}
                    value={institucion.descuento}
                    disabled
                />
            </div>
        </div>
    );
}
