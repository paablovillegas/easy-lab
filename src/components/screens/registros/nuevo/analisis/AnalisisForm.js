import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from '../../../../../helper/alerts'
import { addAnalisis } from '../../../../../redux/actions/orden/newOrden';
import { RoundButton } from '../../../../forms/input-types/RoundButton';
import { NextPrevious } from '../NextPrevious';
import { ItemAnalisis } from './ItemAnalisis';

export const AnalisisForm = ({ prev, next }) => {
    const { analisis } = useSelector(state => state.orden.active);
    const dispatch = useDispatch();

    const add = () => dispatch(addAnalisis());

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
            return;
        }
        next();
    };

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
                    />
                )
            }
            <div className='text-center'>
                <RoundButton title={'Nuevo Análisis'} onClick={add} />
            </div>
            <NextPrevious previous={prev} />
        </form>
    );
}
