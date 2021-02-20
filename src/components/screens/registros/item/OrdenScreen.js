import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startFetchItem } from '../../../../redux/actions/orden';
import { LoadingState } from '../../loading/LoadingState';

export const OrdenScreen = () => {
    const active = useSelector(state => state.orden.active);
    const dispatch = useDispatch();
    const { uid } = useParams();

    console.log(active);

    useEffect(() => {
        dispatch(startFetchItem(uid));
    }, [dispatch, uid]);

    return (
        <div className='flex-1'>
            { !active && <LoadingState />}
            { active &&
                <div>
                    Orden {active.folio}
                </div>
            }
        </div>
    )
}
