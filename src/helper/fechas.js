import dayjs from "dayjs";

export const maxFecha = ({ fecha_creacion: fc, fecha_actualizacion: fa }) => {
    fc = (fc instanceof dayjs && fc) || dayjs(0);
    fa = (fa instanceof dayjs && fa) || dayjs(0);
    if (fc > fa) return fc.format('DD [de] MMMM YYYY, hh:mm A')
    if (!fc.unix()) return '';
    return fa.format('DD [de] MMMM YYYY, hh:mm A');
}
