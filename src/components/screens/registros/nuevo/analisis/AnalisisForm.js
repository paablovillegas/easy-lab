import React, { useState } from 'react'
import { toast } from '../../../../../helper/alerts'
import { initialStateAnalisis } from '../../../../../helper/states/initialAnalisis';
import { RoundButton } from '../../../../forms/input-types/RoundButton';
import { ItemAnalisis } from './ItemAnalisis';

const newItem = ({
    ...initialStateAnalisis,
    _id: '',
});

export const AnalisisForm = ({ prev, next }) => {
    const [analisis, setAnalisis] = useState([newItem]);

    const addAnalisis = () => {
        setAnalisis([...analisis, newItem]);
    };

    const setIndex = (item, i) => {
        const analisisAux = analisis.map((aux, index) =>
            index === i ? item : aux);
        setAnalisis(analisisAux);
    };

    const submit = (e) => {
        e.preventDefault();
        const analisisAux = analisis.reduce((acc, i) => {
            if (!i._id || !i._id.length)
                return acc;
            const auxiliar = acc.find(j => j._id === i._id);
            if (auxiliar)
                return acc;
            return [...acc, i];
        }, []);
        if (analisisAux.length !== analisis.length) {
            toast.fire({
                icon: 'warning',
                title: 'Analisis erróneos o repetidos'
            });
            return
        }
        next();
    }

    return (
        <form
            onSubmit={submit}
        >
            {
                analisis.map((i, index) =>
                    <ItemAnalisis
                        key={index}
                        item={i}
                        index={index}
                        onChange={setIndex}
                    />
                )
            }
            <div className='text-center'>
                <RoundButton
                    title={'Nuevo Análisis'}
                    onClick={addAnalisis}
                />
            </div>
            <div className='flex px-4 pb-3 space-x-2 mt-3'>
                <button
                    className='flex-1 rounded py-2 font-medium uppercase text-gray-700 transition duration-300 active:bg-gray-200 focus:outline-none'
                    type='button'
                    onClick={prev}
                >
                    Anterior
                    </button>
                <button
                    className='flex-1 rounded py-2 font-medium uppercase text-yellow-400 bg-gray-700 transition duration-300 active:bg-gray-900 focus:outline-none'
                >
                    Siguiente
                    </button>
            </div>
        </form>
    );
}
