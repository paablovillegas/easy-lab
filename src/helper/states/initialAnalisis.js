
const initialReducerAnalisis = {
    analisis: [],
    active: null,
    loading: false,
};

const initialStateAnalisis = {
    analisis: '',
    descripcion: '',
    precio: 0,
    componentes: [],
};

const initialStateOrdenAnalisis = {
    ...initialStateAnalisis,
    _id: '',
}

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
    initialStateOrdenAnalisis,
    initialOrderAnalisis,
    opcionesAnalisis,
}