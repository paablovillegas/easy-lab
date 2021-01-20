import { faClipboardList, faHdd, faHospital, faMoneyCheck, faUser, faUserMd, faVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const NavBar = () => {
    return (
        <div className="bg-gray-700 w-100 h-full flex flex-col">
            <div className="flex-grow mt-14 text-center flex flex-col space-y-5">
                <div>
                    <button>
                        <FontAwesomeIcon className="text-yellow-400" icon={faHdd} />
                    </button>
                    <div className="flex flex-col pt-3 space-y-3">
                        <button>
                            <FontAwesomeIcon className="text-gray-400" icon={faUser} size="sm" />
                        </button>
                        <button>
                            <FontAwesomeIcon className="text-gray-400" icon={faUserMd}  size="sm" />
                        </button>
                        <button>
                            <FontAwesomeIcon className="text-gray-400" icon={faHospital}  size="sm" />
                        </button>
                        <button>
                            <FontAwesomeIcon className="text-gray-400" icon={faVial}  size="sm" />
                        </button>
                    </div>
                </div>
                <button>
                    <FontAwesomeIcon className="text-yellow-400" icon={faMoneyCheck} />
                </button>
                <button>
                    <FontAwesomeIcon className="text-yellow-400" icon={faClipboardList} />
                </button>
            </div>
            <div className="flex-none mb-6 text-center">
                <p>U</p>
                <p>U</p>
            </div>
        </div>
    )
}
