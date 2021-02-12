import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const SelectSmallInput = ({ options = [], selected, ascendente, changeOrder, changeSelected }) => {

    const changeField = ({ target }) => changeSelected(target.value);

    return (
        <div className="flex w-full py-1">
            <select
                className='flex-1 appearance-none rounded bg-gray-50 px-1 ml-2 transition duration-300 active:bg-gray-300 focus:outline-none'
                value={selected}
                onChange={changeField}
            >
                {
                    options.map(option => (
                        <option
                            key={option.field}
                            value={option.field}
                        >
                            {option.name}
                        </option>
                    ))
                }
            </select>
            <button
                className='mx-2 px-1.5 rounded transition duration-300 active:bg-gray-300 focus:outline-none'
                onClick={changeOrder}
            >
                <FontAwesomeIcon
                    icon={ascendente ? faChevronDown : faChevronUp}
                />
            </button>
        </div>
    )
}
