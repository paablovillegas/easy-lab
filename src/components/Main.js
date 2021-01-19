import React from 'react'
import { FormPaciente } from './FormPaciente'

export const Main = () => {
    return (
        <div className="flex flex-col space-y-6">
            <div className="w-full h-12 bg-gray-700"></div>
            <FormPaciente />
        </div>
    )
}
