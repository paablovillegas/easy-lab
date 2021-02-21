
export const numberFormat = (currency) =>
    new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(currency);


export const pad = function (number, size) {
    var s = String(number);
    while (s.length < (size || 2))
        s = "0" + s;;
    return s;
};