import { faPlus, faVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setActive, startFetchInstituciones } from '../../../../redux/actions/institucion'
import { RoundInput } from '../../../forms/input-types/RoundInput'
import { ItemFile } from '../../../forms/search-bar/ItemFile'
import { ResumeBar } from '../../../forms/search-bar/ResumeBar'

const initialInstitucion = {
    institucion: '',
    descuento: 0
};

export const SearchInstitucion = ({ data = [], active, mostrarBarra }) => {
    const [stringSearch, setStringSearch] = useState('');
    const dispatch = useDispatch();

    const setSearch = ({ target }) => setStringSearch(target.value);

    const filterList = ({ institucion, descuento }) => institucion.toLowerCase().includes(stringSearch)
        || descuento.toString().includes(stringSearch);

    const selectItem = (id) => dispatch(setActive(data.find(i => i._id === id)));

    const newItem = () => dispatch(setActive(initialInstitucion));

    const updateList = () => dispatch(startFetchInstituciones());

    return (
        <div className={`bg-gray-50 min-h-full w-screen flex-col relative sm:flex sm:w-auto sm:h-screen
            ${active && 'hidden'} ${active && !mostrarBarra && 'sm:hidden'}
        `}>
            <div
                className="flex flex-row"
            >
                <h2 className="flex-grow text-3xl font-bold px-3 my-3">Instituciones</h2>
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
                                title={item.institucion}
                                subtitle={item.descuento.toString().concat(' %')}
                                onClick={() => selectItem(item._id)}
                            />
                        })
                }
            </div>
            <ResumeBar
                title="Instituciones"
                cantidad={data.length}
                onClick={updateList}
            />
        </div>
    );
}
