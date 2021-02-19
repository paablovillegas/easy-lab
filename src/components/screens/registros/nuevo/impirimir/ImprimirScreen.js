import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from '../../../../../helper/alerts';
import { LoadingState } from './LoadingState';

const pad = function (number, size) {
    var s = String(number);
    while (s.length < (size || 2))
        s = "0" + s;;
    return s;
};

export const ImprimirScreen = () => {
    const { active } = useSelector(state => state.orden);

    useEffect(() => {
        if (active.files)
            toast.fire({
                title: `Orden #${pad(active.folio, 5)} creado exitosamente!`,
                icon: 'success'
            });
    }, [active]);

    return (!active.files)
        ? (<LoadingState />)
        : (
            <div>
                <h1>Orden {pad(active.folio, 5)} creado exitosamente!</h1>
            </div>
        );
}
