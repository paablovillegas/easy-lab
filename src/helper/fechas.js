import dayjs from "dayjs";

const format = 'DD [de] MMMM YYYY, hh:mm A';

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
