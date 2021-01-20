import { faClipboardList, faHdd, faHospital, faInfoCircle, faMoneyCheck, faSignOutAlt, faUser, faUserMd, faVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const NavBar = () => {
    return (
        <div className="bg-gray-700 w-100 h-full flex flex-col overflow-y-hidden">
            <div className="flex-grow mt-14 flex flex-col space-y-3">
                <button className="mx-auto lg:ml-2 lg:mr-2 lg:pl-2 lg:text-left px-3 py-1 rounded transition focus:outline-none active:bg-gray-800">
                    <FontAwesomeIcon className="text-yellow-400 lg:hidden xl:inline-block xl:mr-3" icon={faMoneyCheck} />
                    <h4 className="hidden lg:inline-block text-xl text-yellow-400 font-bold uppercase">Catálogos</h4>
                </button>
                <div className="mx-2 sm:mx-0 flex flex-col space-y-1">
                    <button className="py-1 mx-0.5 rounded transition focus:outline-none active:bg-gray-800 lg:text-left lg:mx-2 lg:px-2">
                        <FontAwesomeIcon className="text-gray-400 lg:hidden xl:inline-block xl:mr-2" icon={faUser} size="sm" />
                        <h5 className="hidden lg:inline-block text-md text-gray-400 uppercase">Pacientes</h5>
                    </button>
                    <button className="py-1 mx-0.5 rounded transition focus:outline-none active:bg-gray-800 lg:text-left lg:mx-2 lg:px-2">
                        <FontAwesomeIcon className="text-gray-400 lg:hidden xl:inline-block xl:mr-2" icon={faUserMd}  size="sm" />
                        <h5 className="hidden lg:inline-block text-md text-gray-400 uppercase">Doctores</h5>
                    </button>
                    <button className="py-1 mx-0.5 rounded transition focus:outline-none active:bg-gray-800 lg:text-left lg:mx-2 lg:px-2">
                        <FontAwesomeIcon className="text-gray-400 lg:hidden xl:inline-block xl:mr-2" icon={faHospital}  size="sm" />
                        <h5 className="hidden lg:inline-block text-md text-gray-400 uppercase">Instituciones</h5>
                    </button>
                    <button className="py-1 mx-0.5 rounded transition focus:outline-none active:bg-gray-800 lg:text-left lg:mx-2 lg:px-2">
                        <FontAwesomeIcon className="text-gray-400 lg:hidden xl:inline-block xl:mr-2" icon={faVial}  size="sm" />
                        <h5 className="hidden lg:inline-block text-md text-gray-400 uppercase">Análisis</h5>
                    </button>
                </div>
                <button className="mx-auto lg:ml-2 lg:mr-2 lg:pl-2 lg:text-left px-3 py-1 rounded transition focus:outline-none active:bg-gray-800">
                    <FontAwesomeIcon className="text-yellow-400 lg:hidden xl:inline-block xl:mr-3" icon={faMoneyCheck} />
                    <h4 className="hidden lg:inline-block text-xl text-yellow-400 font-bold uppercase">Registros</h4>
                </button>
                <button className="mx-auto lg:ml-2 lg:mr-2 lg:pl-2 lg:text-left px-3 py-1 rounded transition focus:outline-none active:bg-gray-800">
                    <FontAwesomeIcon className="text-yellow-400 lg:hidden xl:inline-block xl:mr-5" icon={faClipboardList} />
                    <h4 className="hidden lg:inline-block text-xl text-yellow-400 font-bold uppercase">Reportes</h4>
                </button>
            </div>
            <div className="flex-none mb-3 flex flex-col lg:flex-row space-y-1">
                <button className="mx-auto lg:ml-3 px-3 py-2 rounded transition focus:outline-none active:bg-gray-800">
                    <FontAwesomeIcon className="text-gray-400" icon={faInfoCircle} />
                </button>
                <button className="mx-auto lg:mr-3 px-3 py-2 rounded transition focus:outline-none active:bg-gray-800">
                    <FontAwesomeIcon className="text-gray-400" icon={faSignOutAlt} />
                </button>
            </div>
        </div>
    )
}
