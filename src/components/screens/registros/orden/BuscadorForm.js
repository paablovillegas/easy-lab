import { faCalendarAlt, faDollarSign, faFileInvoice, faHospital, faSearch, faUser, faUserMd, faVial } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toDatabaseDate, toInputDate } from '../../../../helper/fechas'
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
    const all = useSelector(state => state);
    const dispatch = useDispatch();

    const [pacientes, setPacientes] = useState([]);
    const [doctores, setDoctores] = useState([]);
    const [instituciones, setInstituciones] = useState([]);
    const [analisis, setAnalisis] = useState([]);

    const [busquedaAvanzada, setBusquedaAvanzada] = useState({
        paciente: '',
        doctor: '',
        institucion: '',
        analisis: '',
        facturado: '',
        liquidado: '',
        fecha_inicio: '',
        fecha_fin: '',
    });

    const handleChange = ({ target }) => {
        setBusquedaAvanzada({
            ...busquedaAvanzada,
            [target.name]: target.value,
        });
    }

    const fetchData = (e) => {
        e.preventDefault();
        dispatch(startFetchBusquedaAvanzada({
            ...busquedaAvanzada,
            fecha_inicio: toDatabaseDate(busquedaAvanzada.fecha_inicio),
            fecha_fin: toDatabaseDate(busquedaAvanzada.fecha_fin),
        }));
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
        <form
            className='grid grid-cols-3 space-x-3 px-3'
            onSubmit={fetchData}
        >
            <h2 className='col-span-2 text-3xl px-4 pt-3 font-semibold text-gray-800'>Ordenes</h2>
            {/*Folio*/}
            <div className='flex flex-row'>
                <div className='flex-grow'>
                    <RegularInput
                        icon={faSearch}
                        name='folio'
                        placeholder='Folio'
                        inputType='number'
                    />
                </div>
                <div className='mt-auto mb-0.5 pl-3 w-36'>
                    <RegularButton
                        title='Buscar'
                    />
                </div>
            </div>
            <hr className='col-span-3 mt-4 mb-2' />
            {/*Fechas*/}
            <RegularInput
                icon={faCalendarAlt}
                name='fecha_inicio'
                placeholder='Desde'
                inputType='date'
                value={busquedaAvanzada.fecha_inicio}
                onChange={handleChange}
            />
            <RegularInput
                icon={faCalendarAlt}
                name='fecha_fin'
                placeholder='Hasta'
                inputType='date'
                value={busquedaAvanzada.fecha_fin}
                onChange={handleChange}
            />
            {/*Paciente*/}
            <SelectInput
                icon={faUser}
                name='paciente'
                options={pacientes}
                title='Paciente'
                firstDisabled={false}
                value={busquedaAvanzada.paciente}
                onChange={handleChange}
            />
            {/*Doctor*/}
            <SelectInput
                icon={faUserMd}
                name='doctor'
                options={doctores}
                title='Doctor'
                firstDisabled={false}
                value={busquedaAvanzada.doctor}
                onChange={handleChange}
            />
            {/*Institucion*/}
            <SelectInput
                icon={faHospital}
                name='institucion'
                options={instituciones}
                title='Institucióon'
                firstDisabled={false}
                value={busquedaAvanzada.institucion}
                onChange={handleChange}
            />
            {/*Análisis*/}
            <SelectInput
                icon={faVial}
                name='analisis'
                options={analisis}
                title='Análsis'
                firstDisabled={false}
                value={busquedaAvanzada.analisis}
                onChange={handleChange}
            />
            {/*Facturacion*/}
            <SelectInput
                icon={faFileInvoice}
                name='facturado'
                options={yesNoOptions}
                title='Facturado'
                firstDisabled={false}
                value={busquedaAvanzada.facturado}
                onChange={handleChange}
            />
            {/*Pagos*/}
            <SelectInput
                icon={faDollarSign}
                name='liquidado'
                options={yesNoOptions}
                title='Liquidado'
                firstDisabled={false}
                value={busquedaAvanzada.liquidado}
                onChange={handleChange}
            />
            <div className='mt-auto'>
                <RegularButton
                    title='Busqueda Avanzada'
                />
            </div>
        </form>
    )
}
