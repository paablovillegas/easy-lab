import { faBars, faClipboardList, faHdd, faHospital, faInfoCircle, faList, faMoneyCheck, faSignOutAlt, faUser, faUserMd, faVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './NavBar.css'

export const NavBar = () => {
    return (
        <div className="bg-gray-700 w-100 h-full flex flex-col overflow-y-hidden">
            <div className="flex sm:hidden flex-row pr-3">
                <h3
                    className="flex-grow m-3 text-gray-200"
                >
                    Laboratorio Nombre
                </h3>
                <button className="normal p-3 m-2">
                    <FontAwesomeIcon
                        className="text-gray-400 lg:hidden xl:inline-block xl:mr-2"
                        icon={faList} 
                    />
                </button>
            </div>
            <div className="flex-grow mt-3 sm:mt-6 flex flex-col space-y-3">
                <button className="primary">
                    <FontAwesomeIcon 
                        className="align-baseline text-yellow-400 lg:hidden xl:inline-block xl:mr-3" 
                        icon={faHdd}
                    />
                    <h4>Catálogos</h4>
                </button>
                <div className="mx-2 flex flex-col space-y-1">
                    <button className="normal">
                        <FontAwesomeIcon 
                            className="text-gray-400 lg:hidden xl:inline-block xl:mr-2" 
                            icon={faUser}
                            size="sm"
                        />
                        <h5>Pacientes</h5>
                    </button>
                    <button className="normal">
                        <FontAwesomeIcon 
                            className="text-gray-400 lg:hidden xl:inline-block xl:mr-2" 
                            icon={faUserMd}
                            size="sm"
                        />
                        <h5>Doctores</h5>
                    </button>
                    <button className="normal">
                        <FontAwesomeIcon 
                            className="text-gray-400 lg:hidden xl:inline-block xl:mr-2" 
                            icon={faHospital}
                            size="sm"
                        />
                        <h5>Instituciones</h5>
                    </button>
                    <button className="normal">
                        <FontAwesomeIcon 
                            className="text-gray-400 lg:hidden xl:inline-block xl:mr-2" 
                            icon={faVial}
                            size="sm"
                        />
                        <h5>Análisis</h5>
                    </button>
                </div>
                <button className="primary">
                    <FontAwesomeIcon 
                        className="align-baseline text-yellow-400 lg:hidden xl:inline-block xl:mr-3" 
                        icon={faMoneyCheck}
                    />
                    <h4>Registros</h4>
                </button>
                <button className="primary">
                    <FontAwesomeIcon 
                        className="align-baseline text-yellow-400 lg:hidden xl:inline-block xl:mr-5" 
                        icon={faClipboardList}
                    />
                    <h4>Reportes</h4>
                </button>
            </div>
            <div className="flex-none mb-3 mt-3 flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:justify-center lg:space-x-6">
                <button className="mx-2 lg:ml-3 px-3 py-1 rounded transition focus:outline-none active:bg-gray-800">
                    <FontAwesomeIcon 
                        className="text-gray-400" 
                        icon={faInfoCircle}
                    />
                    <h5 className="lg:hidden">Información</h5>
                </button>
                <button className="mx-2 lg:mr-3 px-3 py-1 rounded transition focus:outline-none active:bg-gray-800">
                    <FontAwesomeIcon 
                        className="text-gray-400" 
                        icon={faSignOutAlt}
                    />
                    <h5 className="lg:hidden">Cerrar Sesión</h5>
                </button>
            </div>
        </div>
    )
}
