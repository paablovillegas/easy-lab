import { faFlask, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSetResultados } from '../../../../redux/actions/orden';
import { RegularButton } from '../../../forms/input-types/RegularButton';
import { RegularInput } from '../../../forms/input-types/RegularInput';

export const ResultadosItem = () => {
    const active = useSelector(state => state.orden.active);
    const [editMode, setEditMode] = useState(false);
    const [analisis, setAnalisis] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setAnalisis(active.analisis.map(i => ({
            ...i,
            componentes: i.componentes.map(j => ({
                resultado: '',
                ...j
            })),
        })));
    }, [active]);

    const setState = () => setEditMode(!editMode);

    const setAnalsis = ({ target }, iAnalisis, iComponente) => {
        setAnalisis(analisis.map((a, aIndex) => iAnalisis !== aIndex
            ? a
            : {
                ...a,
                componentes: a.componentes.map((c, cIndex) => cIndex !== iComponente
                    ? c
                    : {
                        ...c,
                        resultado: target.value,
                    }
                ),
            }
        ));
    };

    const mapComponentes = (item, index) => (item.map((i, j) => (
        <RegularInput
            key={j}
            icon={faFlask}
            name='resultado'
            onChange={(e) => setAnalsis(e, index, j)}
            placeholder={`Resultado ${i.componente}`}
            value={i.resultado}
            inputType='text'
            disabled={!editMode}
        />
    )));

    const mapAnalisis = () => analisis.map((i, index) => (
        <React.Fragment key={index}>
            <h5 className='text-gray-500 text-xl mt-2'>{i.analisis}</h5>
            {mapComponentes(i.componentes, index)}
            <hr className='my-2' />
        </React.Fragment>
    ));

    const actualizarAnalisis = (e) => {
        e.preventDefault();

        const resultados = analisis.map(i => ({
            ...i,
            componentes: i.componentes.map(c => ({
                ...c,
                resultado: c.resultado || undefined,
            })),
        }));
        dispatch(startSetResultados(active._id, resultados));
        setEditMode(false);
    }

    return (
        <div className='lg:col-span-6 shadow rounded-xl p-2 m-1.5'>
            <div
                className='flex cursor-pointer select-none'
                onClick={setState}
            >
                <h3 className='flex-grow text-2xl text-gray-700'>
                    Resultados
            </h3>
                <div className='my-auto pr-3'>
                    <FontAwesomeIcon
                        icon={faPen}
                    />
                </div>
            </div>
            <form
                className={editMode ? 'block' : 'hidden'}
                onSubmit={actualizarAnalisis}
            >
                {mapAnalisis()}
                <RegularButton title='Actualizar' />
            </form>
        </div>
    )
}
