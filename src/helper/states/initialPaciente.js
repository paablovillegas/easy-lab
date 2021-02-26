
const initialStateReducer = {
    pacientes: [],
    active: null,
    loading: false,
};

const initialStatePaciente = {
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    correo: '',
    telefono: '',
    genero: 1,
    fecha_nacimiento: '',
    direccion: '',
};

const initialOrderPaciente = {
    selected: 'apellido_paterno',
    ascendente: true,
}

const opcionesPaciente = [
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
]

const opcionesGenero = [
    {
        value: 1,
        name: 'Masculino'
    },
    {
        value: 2,
        name: 'Femenino'
    },
];

export {
    initialStateReducer,
    initialStatePaciente,
    initialOrderPaciente,
    opcionesPaciente,
    opcionesGenero,
}