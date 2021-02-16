
const initialReducerAnalisis = {
    analisis: [],
    active: null,
};

const initialStateAnalisis = {
    analisis: '',
    descripcion: '',
    precio: 0,
    componentes: [],
};

const initialOrderAnalisis = {
    selected: 'analisis',
    ascendente: true,
};

const opcionesAnalisis = [
    {
        name: 'Analisis',
        field: 'analisis',
    },
    {
        name: 'Precio',
        field: 'precio',
    },
];

export {
    initialReducerAnalisis,
    initialStateAnalisis,
    initialOrderAnalisis,
    opcionesAnalisis,
}