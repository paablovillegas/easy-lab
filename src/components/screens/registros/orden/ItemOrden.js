import React from 'react'

export const ItemOrden = ({ item }) => {

    return (
        <tr>
            <td>{item.folio}</td>
            <td>{item.fecha_pedido}</td>
            <td>{`${item.paciente.nombre} ${item.paciente.apellido_paterno} ${item.paciente.apellido_materno || ''}`}</td>
            <td>{`${item.doctor.nombre} ${item.doctor.apellido_paterno} ${item.doctor.apellido_materno || ''}`}</td>
            <td>{item.institucion.institucion}</td>
            <td>{item.analisis.reduce((acc, item) => acc += item.analisis + ' ', '')}</td>
            <td>{item.totales.total}</td>
            <td>Más</td>
        </tr>
    );
}
