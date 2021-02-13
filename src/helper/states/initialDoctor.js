
const initialStateDoctor = {
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    correo: '',
    telefono: '',
    comision: 0,
};

const initialOrderDoctor = {
    selected: 'apellido_paterno',
    ascendente: true,
};

const opcionesDoctor = [
    {
        name: 'Nombre',
        field: 'nombre',
    },
    {
        name: 'Apellido Paterno',
        field: 'apellido_paterno',
    },
    {
        name: 'Apellido Materno',
        field: 'apellido_materno',
    },
    {
        name: 'Correo',
        field: 'correo',
    },
    {
        name: 'Teléfono',
        field: 'telefono',
    },
    {
        name: 'Comisión',
        field: 'comision',
    },
];

export {
    initialStateDoctor,
    initialOrderDoctor,
    opcionesDoctor,
}