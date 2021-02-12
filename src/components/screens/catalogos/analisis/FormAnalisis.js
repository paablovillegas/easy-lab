import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearActive, startInsertAnalisis, startUpdateAnalisis } from '../../../../redux/actions/analisis';

export const FormAnalisis = ({ data = [], barraLateral, setBarraLateral }) => {
    const dispatch = useDispatch();
    const [analisis, setAnalisis] = useState(data);
    useEffect(() => {
        setAnalisis({ ...data })
    }, [data]);

    const handleChange = ({ target }) => {
        setAnalisis({
            ...analisis,
            [target.name]: target.value
        });
    };

    const updateInsert = () => {
        const inputNumber = parseFloat(analisis.precio)
        if (inputNumber || inputNumber === 0) {
            setAnalisis({
                ...analisis,
                precio: inputNumber
            })
            if (analisis._id)
                dispatch(startUpdateAnalisis(analisis));
            else
                dispatch(startInsertAnalisis(analisis));
        } else {
            //TODO: Mostrar error!
            console.log('error');
        }
    };

    const clearInstitucion = () => dispatch(clearActive());

    return (
        <div>
            
        </div>
    )
}
