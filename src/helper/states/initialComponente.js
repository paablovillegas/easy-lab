
const initialStateReducer = {
    componentes: [],
    active: null,
    loading: false,
};
const initialStateComponente = {
    componente: '',
    referencia: '',
}

const initialOrderComponente = {
    selected: 'componente',
    ascendente: true,
};

const opcionesComponente = [
    {
        name: 'Componente',
        field: 'analisis',
    },
    {
        name: 'Precio',
        field: 'precio',
    },
];

export {
    initialStateReducer,
    initialStateComponente,
    initialOrderComponente,
    opcionesComponente,
}