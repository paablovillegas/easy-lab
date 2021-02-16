import { faDollarSign, faTimes, faVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RegularInput } from '../../../../forms/input-types/RegularInput'
import { SelectInput } from '../../../../forms/input-types/SelectInput';

const defaultAnalisis = {
    value: '',
    name: '-- Seleccionar Análisis --',
};

export const ItemAnalisis = ({ item, index, onChange, removeItem }) => {
    const { analisis } = useSelector(state => state.analisis);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let analisisAux = analisis.map(i => ({
            name: i.analisis,
            value: i._id,
        }));
        analisisAux = [defaultAnalisis, ...analisisAux];
        setItems(analisisAux);
    }, [analisis]);

    const handleChange = ({ target }) => {
        const itemAux = analisis.find(i => i._id === target.value);
        onChange(itemAux, index)
    }

    return (
        <div className='rounded-xl p-3 mx-4 mb-3 shadow '>
            <div className='flex md:col-span-2 lg:col-span-3'>
                <p className='text-lg flex-1'>
                    Analisis {index + 1}
                </p>
                <button
                    className='px-2.5 focus:outline-none'
                    type='button'
                    onClick={() => removeItem(index)}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className='grid grid-cols-2 space-x-4'>
                <hr className='md:col-span-2 lg:col-span-3 mt-3' />
                <SelectInput
                    icon={faVial}
                    onChange={handleChange}
                    options={items}
                    title='Análisis'
                    value={item._id}
                    required
                />
                <RegularInput
                    icon={faDollarSign}
                    placeholder='Precio'
                    inputType='number'
                    value={item.precio}
                    disabled
                />
            </div>
        </div>
    )
}
