import { faPlus, faVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initialOrderInstitucion, initialStateInsitucion, opcionesInstitucion } from '../../../../helper/states/initialInstitucion'
import { setActive, startFetchInstituciones } from '../../../../redux/actions/institucion'
import { RoundInput } from '../../../forms/input-types/RoundInput'
import { SelectSmallInput } from '../../../forms/input-types/SelectSmallInput'
import { ItemFile } from '../../../forms/search-bar/ItemFile'
import { ResumeBar } from '../../../forms/search-bar/ResumeBar'
import { LoadingStateSmall } from '../../loading/LoadingStateSmall'

export const SearchInstitucion = ({ data = [], active, mostrarBarra }) => {
    const { loading } = useSelector(state => state.institucion);
    const [items, setItems] = useState(data);
    const [stringSearch, setStringSearch] = useState('');
    const [{ selected, ascendente }, setSearchOrder] = useState(initialOrderInstitucion);

    const dispatch = useDispatch();

    const setSearch = ({ target }) => setStringSearch(target.value);

    const filterList = ({ institucion, descuento }) => institucion.toLowerCase().includes(stringSearch)
        || descuento.toString().includes(stringSearch);

    const setCampoOrdenamiento = (field) => setSearchOrder({
        selected: field,
        ascendente: ascendente,
    });

    const setAscendenteDescendente = () => setSearchOrder({
        selected,
        ascendente: !ascendente,
    });

    useEffect(() => {
        setItems([...data]);
    }, [data]);

    useEffect(() => {
        setItems(prev => [...prev].sort((a, b) => ascendente
            ? a[selected] > b[selected] ? 1 : -1
            : a[selected] < b[selected] ? 1 : -1
        ));
    }, [setItems, selected, ascendente]);

    const selectItem = (id) => dispatch(setActive(data.find(i => i._id === id)));

    const newItem = () => dispatch(setActive(initialStateInsitucion));

    const updateList = () => dispatch(startFetchInstituciones());

    return (
        <div className={`bg-gray-50 min-h-full w-screen flex-col relative sm:flex sm:w-auto sm:h-screen items-center
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
            <SelectSmallInput
                options={opcionesInstitucion}
                selected={selected}
                ascendente={ascendente}
                changeOrder={setAscendenteDescendente}
                changeSelected={setCampoOrdenamiento}
            />
            <hr></hr>
            { loading && !items.length &&
                <div className='pt-10'>
                    <LoadingStateSmall />
                </div>
            }
            <div className="w-full flex-grow sm:mb-10 sm:overflow-y-auto">
                {
                    items.filter(item => filterList(item))
                        .map((item, i) =>
                            <ItemFile
                                key={item._id}
                                index={i}
                                title={item.institucion}
                                subtitle={item.descuento.toString().concat(' %')}
                                onClick={() => selectItem(item._id)}
                            />
                        )
                }
            </div>
            <ResumeBar
                title="Instituciones"
                cantidad={items.length}
                onClick={updateList}
            />
        </div>
    );
}
