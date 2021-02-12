import { faPlus, faVial } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setActive } from '../../../../redux/actions/doctor';
import { RoundInput } from '../../../forms/input-types/RoundInput';
import { ItemFile } from '../../../forms/search-bar/ItemFile';

const initialState = {
    nombre: '',
    apellido_paterno: '',
    comision: 0,
}

export const SearchDoctor = ({ data = [], active, mostrarBarra }) => {
    const [stringSearch, setStringSearch] = useState('');
    const dispatch = useDispatch();

    const setSearch = ({ target }) => setStringSearch(target.value);

    const filterList = ({ nombre: n, apellido_paterno: ap, apellido_materno: am = ''}) =>
        `${n} ${ap} ${am}`.toLowerCase().includes(stringSearch) ||
        `${ap} ${am} ${n}`.toLowerCase().replace('  ', ' ').includes(stringSearch);

    const selectItem = (id) => dispatch(setActive(data.find(i => i._id === id)));

    const newItem = () => dispatch(setActive(initialState));

    return (
        <div className={`bg-gray-50 min-h-full w-screen flex-col relative sm:flex sm:w-auto sm:h-screen
            ${active && 'hidden'} ${active && !mostrarBarra && 'sm:hidden'}
        `}>
            <div
                className="flex flex-row"
            >
                <h2 className="flex-grow text-3xl font-bold px-3 my-3">Doctores</h2>
                <button
                    className="mr-2 px-5 py-3 my-auto focus:outline-none transition rounded active:bg-gray-200"
                    onClick={newItem}
                >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <div className="p-2">
                <RoundInput
                    placeholder="Institucion, comisión..."
                    icon={faVial}
                    size="xs"
                    value={stringSearch}
                    onChange={setSearch}
                />
            </div>
            <p>Ordenar</p>
            <hr></hr>
            <div className="w-full flex-grow sm:mb-10 sm:overflow-y-auto">
                {
                    data.filter(item => filterList(item))
                        .map((item, i) => {
                            return <ItemFile
                                key={item._id}
                                index={i}
                                title={`${item.apellido_paterno} ${item.apellido_materno || ''}`}
                                subtitle={item.nombre}
                                onClick={() => selectItem(item._id)}
                            />
                        })
                }
            </div>
            <div className="w-full h-10 absolute bottom-0 bg-gray-200 flex flex-col justify-center">
                <p className="text-sm text-center text-gray-600">Doctores</p>
                <p className="text-xs text-center text-gray-500">{data.length}</p>
            </div>
        </div>
    );
}
