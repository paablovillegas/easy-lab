import { faIndustry, faPercentage } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { RegularInput } from '../../../../forms/input-types/RegularInput';
import { ToggleSwitch } from '../../../../forms/input-types/ToggleSwitch';

export const InstitucionForm = ({ active, setActive }) => {
    return (
        <div className={`rounded-xl p-3 mx-4 mb-3 ${active ? 'shadow' : 'shadow-sm'}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4  mb-3'>
                <div className='md:col-span-2 lg:col-span-3'>
                    <ToggleSwitch
                        title='Institucion'
                        active={active}
                        setActive={setActive}
                    />
                </div>
                <div className='lg:col-span-2'>
                    <RegularInput
                        placeholder='Institucion'
                        icon={faIndustry}
                        disabled={!active}
                    />
                </div>
                <RegularInput
                    placeholder='Descuento'
                    icon={faPercentage}
                    disabled
                />
            </div>
        </div>
    );
}
