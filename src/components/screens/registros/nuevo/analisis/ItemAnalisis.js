import { faDollarSign, faVial } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RegularInput } from '../../../../forms/input-types/RegularInput'
import { SelectInput } from '../../../../forms/input-types/SelectInput';

const defaultAnalisis = {
    value: '',
    name: '-- Seleccionar Análisis --',
};

export const ItemAnalisis = ({ item, index, onChange }) => {
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
        <div className='rounded-xl p-3 mx-4 mb-3 shadow'>
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
    )
}
