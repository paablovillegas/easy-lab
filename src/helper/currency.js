
export const numberFormat = (currency) =>
    new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(currency);