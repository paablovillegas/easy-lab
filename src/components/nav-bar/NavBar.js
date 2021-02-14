import { faClipboardList, faFlask, faHdd, faHospital, faInfoCircle, faList, faMoneyCheck, faSignOutAlt, faUser, faUserMd, faVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {
    const { pathname } = useLocation();
    const [menuState, setMenuState] = useState(false);

    const showHideMenu = () => {
        setMenuState(state => !state)
    };

    return (
        <div className="bg-gray-700 w-100 sm:min-h-screen flex flex-col overflow-y-hidden">
            <div className="flex sm:hidden flex-row pr-3">
                <h3 className="flex-grow ml-3 my-auto text-gray-200 align-baseline">
                    Laboratorio Nombre
                </h3>
                <button className="normal p-2 m-2" onClick={showHideMenu}>
                    <FontAwesomeIcon
                        className="text-gray-400 lg:hidden xl:inline-block xl:mr-2"
                        icon={faList}
                    />
                </button>
            </div>
            <div className={`flex flex-grow mt-3 sm:mt-6 flex-col space-y-3 ${menuState && 'hidden sm:flex'}`}>
                <Link className="primary" to="/catalogos" title="Catálogos">
                    <FontAwesomeIcon
                        className="align-baseline text-yellow-400 lg:hidden xl:inline-block xl:mr-3"
                        icon={faHdd}
                    />
                    <h4 className='menu'>Catálogos</h4>
                </Link>
                <div className="mx-2 flex flex-col space-y-1">
                    {
                        pathname.includes('catalogos') &&
                        <>
                            <Link className="normal" to="/catalogos/pacientes" title="Pacientes">
                                <FontAwesomeIcon
                                    className="text-gray-400 lg:hidden xl:inline-block xl:mr-2"
                                    icon={faUser}
                                    size="sm"
                                />
                                <h5 className='menu'>Pacientes</h5>
                            </Link>
                            <Link className="normal" to="/catalogos/doctores" title="Doctores">
                                <FontAwesomeIcon
                                    className="text-gray-400 lg:hidden xl:inline-block xl:mr-2"
                                    icon={faUserMd}
                                    size="sm"
                                />
                                <h5 className='menu'>Doctores</h5>
                            </Link>
                            <Link className="normal" to="/catalogos/instituciones" title="Instituciones">
                                <FontAwesomeIcon
                                    className="text-gray-400 lg:hidden xl:inline-block xl:mr-2"
                                    icon={faHospital}
                                    size="sm"
                                />
                                <h5 className='menu'>Instituciones</h5>
                            </Link>
                            <Link className="normal" to="/catalogos/analisis" title="Análisis">
                                <FontAwesomeIcon
                                    className="text-gray-400 lg:hidden xl:inline-block xl:mr-2"
                                    icon={faVial}
                                    size="sm"
                                />
                                <h5 className='menu'>Análisis</h5>
                            </Link>
                            <Link className="normal" to="/catalogos/componentes" title="Componentes">
                                <FontAwesomeIcon
                                    className="text-gray-400 lg:hidden xl:inline-block xl:mr-2"
                                    icon={faFlask}
                                    size="sm"
                                />
                                <h5 className='menu'>Componentes</h5>
                            </Link>
                        </>
                    }
                </div>
                <Link className="primary" to="/" title="Registros">
                    <FontAwesomeIcon
                        className="align-baseline text-yellow-400 lg:hidden xl:inline-block xl:mr-3"
                        icon={faMoneyCheck}
                    />
                    <h4 className='menu'>Registros</h4>
                </Link>
                <Link className="primary" to="/" title="Reportes">
                    <FontAwesomeIcon
                        className="align-baseline text-yellow-400 lg:hidden xl:inline-block xl:mr-5"
                        icon={faClipboardList}
                    />
                    <h4 className='menu'>Reportes</h4>
                </Link>
            </div>
            <div className={`flex flex-none my-3 flex-col lg:flex-row space-y-1 lg:space-y-0 lg:justify-between ${menuState && 'hidden sm:flex'}`}>
                <Link to="/" className="text-center px-3 py-1 mx-2 lg:ml-4 rounded transition focus:outline-none active:bg-gray-800">
                    <FontAwesomeIcon
                        className="text-gray-400"
                        icon={faInfoCircle}
                    />
                    <h5 className="menu lg:hidden">Información</h5>
                </Link>
                <Link to="/" className="text-center px-3 py-1 mx-2 lg:mr-4 rounded transition focus:outline-none active:bg-gray-800">
                    <FontAwesomeIcon
                        className="text-gray-400"
                        icon={faSignOutAlt}
                    />
                    <h5 className="menu lg:hidden">Cerrar Sesión</h5>
                </Link>
            </div>
        </div>
    )
}
