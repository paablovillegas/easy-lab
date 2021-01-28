import React from 'react'
import { Link } from 'react-router-dom'

export const ItemFile = ({ index, title, subtitle, route, id }) => {

    return (
        <Link
            className="flex flex-row hover:bg-gray-200 pt-2.5 pb-2.5 select-none"
            to={`${route}${id}`}
            replace
        >
            <p className="my-auto w-16 text-center text-lg text-gray-900 font-light">{index + 1}</p>
            <div className="flex flex-col">
                <p className="text-bg-gray-800 font-semibold">
                    {title}
                </p>
                <p className="text-gray-400 text-xs truncate">
                    {subtitle}
                </p>
            </div>
        </Link>
    )
}