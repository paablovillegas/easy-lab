
const initialStateInsitucion = {
    institucion: '',
    descuento: 0
};

const initialOrderInstitucion = {
    selected: 'institucion',
    ascendente: true,
};

const opcionesInstitucion = [
    {
        name: 'Institucion',
        field: 'institucion',
    },
    {
        name: 'Descuento',
        field: 'descuento',
    },
];

export {
    initialStateInsitucion,
    initialOrderInstitucion,
    opcionesInstitucion,
}