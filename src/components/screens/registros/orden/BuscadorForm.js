import { faCalendarAlt, faChevronDown, faDollarSign, faFileInvoice, faHospital, faSearch, faUser, faUserMd, faVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from '../../../../helper/alerts'
import { toDatabaseDate } from '../../../../helper/fechas'
import { fetchConToken } from '../../../../helper/fetch'
import { startFetchAnalisis } from '../../../../redux/actions/analisis'
import { startFetchDoctores } from '../../../../redux/actions/doctor'
import { startFetchInstituciones } from '../../../../redux/actions/institucion'
import { startFetchBusquedaAvanzada } from '../../../../redux/actions/orden'
import { startFetchPacientes } from '../../../../redux/actions/paciente'
import { RegularButton } from '../../../forms/input-types/RegularButton'
import { RegularInput } from '../../../forms/input-types/RegularInput'
import { SelectInput } from '../../../forms/input-types/SelectInput'

const firstItem = {
    name: '--Seleccione una opcion ---',
    value: '',
};

const yesNoOptions = [
    { ...firstItem },
    { name: 'Sí', value: 1 },
    { name: 'No', value: 2 },
];

export const BuscadorForm = () => {
    const history = useHistory();
    const all = useSelector(state => state);
    const dispatch = useDispatch();

    const [pacientes, setPacientes] = useState([]);
    const [doctores, setDoctores] = useState([]);
    const [instituciones, setInstituciones] = useState([]);
    const [analisis, setAnalisis] = useState([]);
    const [showAdvanced, setShowAdvanced] = useState(false);

    const [busquedaAvanzada, setBusquedaAvanzada] = useState({
        folio: '',
        paciente: '',
        doctor: '',
        institucion: '',
        analisis: '',
        facturado: '',
        liquidado: '',
        fecha_inicio: '',
        fecha_fin: '',
    });

    const handleClick = () => {
        setShowAdvanced(s => !s);
    }

    const handleChange = ({ target }) => {
        setBusquedaAvanzada({
            ...busquedaAvanzada,
            [target.name]: target.value,
        });
    }

    const fetchData = (e) => {
        e.preventDefault()
        dispatch(startFetchBusquedaAvanzada({
            ...busquedaAvanzada,
            fecha_inicio: toDatabaseDate(busquedaAvanzada.fecha_inicio),
            fecha_fin: toDatabaseDate(busquedaAvanzada.fecha_fin),
        }));
    }

    const searchFolio = (e) => {
        e.preventDefault()
        if (busquedaAvanzada.folio)
            fetchConToken('ordenes/folio/' + busquedaAvanzada.folio)
                .then(response => response.json())
                .then(({ orden }) => {
                    if (orden)
                        history.push('/registros/' + orden._id);
                    else
                        toast.fire({
                            title: 'Orden no existente!',
                            icon: 'warning',
                            position: 'bottom-end',
                        });
                });
    }

    useEffect(() => {
        if (!all.paciente.pacientes.length) {
            dispatch(startFetchPacientes());
        } else {
            const pax = all.paciente.pacientes.map(i => ({
                name: `${i.nombre} ${i.apellido_paterno} ${i.apellido_materno || ''}`,
                value: i._id,
            }));
            setPacientes([firstItem, ...pax]);
        }
        if (!all.doctor.doctores.length) {
            dispatch(startFetchDoctores());
        } else {
            const docs = all.doctor.doctores.map(i => ({
                name: `${i.nombre} ${i.apellido_paterno} ${i.apellido_materno || ''}`,
                value: i._id,
            }));
            setDoctores([firstItem, ...docs]);
        }
        if (!all.institucion.instituciones.length) {
            dispatch(startFetchInstituciones())
        } else {
            const ins = all.institucion.instituciones.map(i => ({
                name: i.institucion,
                value: i._id,
            }));
            setInstituciones([firstItem, ...ins]);
        }
        if (!all.analisis.analisis.length) {
            dispatch(startFetchAnalisis())
        } else {
            const als = all.analisis.analisis.map(i => ({
                name: i.analisis,
                value: i._id,
            }));
            setAnalisis([firstItem, ...als]);
        }
    }, [all, dispatch]);

    return (
        <div className='flex flex-col px-3'>
            <div className='flex flex-col sm:flex-row'>
                <h2 className='flex-1 text-4xl px-4 pt-3 font-semibold text-gray-800'>
                    Ordenes
                </h2>
                <form
                    className='flex sm:flex-row'
                    onSubmit={searchFolio}
                >
                    <div className='flex-grow mt-3'>
                        <RegularInput
                            icon={faSearch}
                            name='folio'
                            placeholder='Folio'
                            inputType='number'
                            value={busquedaAvanzada.folio}
                            onChange={handleChange}
                            showLabel={false}
                        />
                    </div>
                </form>
            </div>
            <hr className='mt-4 mb-2' />
            <div className='flex'>
                <h2 className='flex-1 text-2xl text-gray-700'>Búsqueda avanzada</h2>
                <button
                    className='px-2 focus:outline-none'
                    type='button'
                    onClick={handleClick}
                >
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>
            <form
                className={`md:grid-cols-2 lg:grid-cols-6 sm:space-x-3 ${showAdvanced ? 'grid' : 'hidden'}`}
                onSubmit={fetchData}
            >
                <div className='lg:col-span-3 sm:ml-3'>
                    <RegularInput
                        icon={faCalendarAlt}
                        name='fecha_inicio'
                        placeholder='Desde'
                        inputType='date'
                        value={busquedaAvanzada.fecha_inicio}
                        onChange={handleChange}
                    />
                </div>
                <div className='lg:col-span-3'>
                    <RegularInput
                        icon={faCalendarAlt}
                        name='fecha_fin'
                        placeholder='Hasta'
                        inputType='date'
                        value={busquedaAvanzada.fecha_fin}
                        onChange={handleChange}
                    />
                </div>
                <div className='lg:col-span-2'>
                    <SelectInput
                        icon={faUser}
                        name='paciente'
                        options={pacientes}
                        title='Paciente'
                        firstDisabled={false}
                        value={busquedaAvanzada.paciente}
                        onChange={handleChange}
                    />
                </div>
                <div className='lg:col-span-2'>
                    <SelectInput
                        icon={faUserMd}
                        name='doctor'
                        options={doctores}
                        title='Doctor'
                        firstDisabled={false}
                        value={busquedaAvanzada.doctor}
                        onChange={handleChange}
                    />
                </div>
                <div className='lg:col-span-2'>
                    <SelectInput
                        icon={faHospital}
                        name='institucion'
                        options={instituciones}
                        title='Institucióon'
                        firstDisabled={false}
                        value={busquedaAvanzada.institucion}
                        onChange={handleChange}
                    />
                </div>
                <div className='lg:col-span-2'>
                    <SelectInput
                        icon={faVial}
                        name='analisis'
                        options={analisis}
                        title='Análsis'
                        firstDisabled={false}
                        value={busquedaAvanzada.analisis}
                        onChange={handleChange}
                    />
                </div>
                <div className='lg:col-span-2'>
                    <SelectInput
                        icon={faFileInvoice}
                        name='facturado'
                        options={yesNoOptions}
                        title='Facturado'
                        firstDisabled={false}
                        value={busquedaAvanzada.facturado}
                        onChange={handleChange}
                    />
                </div>
                <div className='lg:col-span-2'>
                    <SelectInput
                        icon={faDollarSign}
                        name='liquidado'
                        options={yesNoOptions}
                        title='Liquidado'
                        firstDisabled={false}
                        value={busquedaAvanzada.liquidado}
                        onChange={handleChange}
                    />
                </div>
                <div className='mt-4 md:ml-3 md:col-span-2 lg:col-span-6'>
                    <RegularButton
                        title='Buscar'
                    />
                </div>
            </form>
        </div>
    )
}
