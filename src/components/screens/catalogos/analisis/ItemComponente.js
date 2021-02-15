import { faFlask, faIndent, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RegularInput } from '../../../forms/input-types/RegularInput';
import { SelectInput } from '../../../forms/input-types/SelectInput';

const defaultComponent = {
    value: '',
    name: '-- Seleccionar Componente --',
};

const mapComponente = (componente) => ({
    value: componente._id,
    name: componente.componente,
});

export const ItemComponente = ({ barraLateral, componente, index, onChange, deleteComponent }) => {
    const { componentes } = useSelector(state => state.componente);

    const [items, setItems] = useState([]);

    useEffect(() => {
        let components = componentes.map(mapComponente);
        components = [defaultComponent, ...components];
        setItems(components);
    }, [componentes]);

    const handleChange = ({ target }) => onChange(target, index);

    const deleteItem = () => deleteComponent(index);

    const buttonClass = 'mt-8 mx-1 px-3.5 rounded transition duration-300 active:bg-gray-100 focus:outline-none ';

    return (
        <>
            <div className='flex'>
                <div className='flex-1'>
                    <SelectInput
                        title='Componente'
                        icon={faFlask}
                        name='componente'
                        value={componente._id}
                        options={items}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button
                    className={buttonClass + ' lg:hidden ' + (!barraLateral && ' sm:hidden')}
                    type='button'
                    onClick={deleteItem}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className={`${barraLateral ? 'mb-4 lg:mb-0 xl:col-span-2' : 'lg:col-span-2'}`}>
                <div className='flex'>
                    <div className='flex-1'>
                        <RegularInput
                            placeholder='Referencia'
                            inputType="text"
                            icon={faIndent}
                            value={componente.referencia}
                            disabled
                        />
                    </div>
                    <button
                        className={buttonClass + ' lg:block ' + (barraLateral && ' sm:hidden')}
                        type='button'
                        onClick={deleteItem}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
            </div>
        </>
    )
}
