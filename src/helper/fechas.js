import dayjs from "dayjs";

const format = 'DD [de] MMMM YYYY, hh:mm A';
const inputFormat = 'YYYY-MM-DD';

export const maxFecha = ({ fecha_creacion: fc, fecha_actualizacion: fa }) => {
    if (!fa)
        return (dayjs(fc).isValid() && dayjs(fc).format(format)) || '!';
    fc = (dayjs(fc).isValid() && dayjs(fc)) || dayjs.unix(0);
    fa = (dayjs(fa).isValid() && dayjs(fa)) || dayjs.unix(0);
    if (fc.unix() > fa.unix())
        return fc.format(format)
    if (!fc.unix())
        return '!';
    return fa.format(format);
}

export const toInputDate = (fecha) => {
    const aux = dayjs(fecha);
    if (aux.isValid())
        return aux.format(inputFormat);
    return '';
}

export const toDatabaseDate = (fecha) => {
    const aux = dayjs(fecha);
    if (aux.isValid())
        return aux.toISOString();
    return '';
}

export const fromInputDate = (fecha) => dayjs(fecha, inputFormat).unix() * 1000;