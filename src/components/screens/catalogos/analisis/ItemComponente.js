import { faFlask, faIndent } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RegularInput } from '../../../forms/input-types/RegularInput';
import { SelectInput } from '../../../forms/input-types/SelectInput';

export const ItemComponente = ({ barraLateral, componente }) => {
    const { componentes } = useSelector(state => state.componente);

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems([...componentes])
    }, [componentes]);

    console.log(items);
    return (
        <>
            <SelectInput
                title='Componente'
                inputType="text"
                icon={faFlask}
                name='componente'
                value={componente.componente}
                options={items}
                onChange={() => { }}
                required
            />
            <div className={`${barraLateral ? 'mb-4 lg:mb-0 xl:col-span-2' : 'lg:col-span-2'}`}>
                <RegularInput
                    placeholder='Referencia'
                    inputType="text"
                    icon={faIndent}
                    value={componente.referencia}
                    disabled
                />
            </div>
        </>
    )
}
