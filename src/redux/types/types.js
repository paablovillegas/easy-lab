export const Types = {
    LOGIN: '[Auth] Login',
    LOGOUT: '[Auth] Logout',
    Institucion: {
        SET_ACTIVE: '[Inst] Set',
        CLEAR_ACTIVE: '[Inst] Clear',
        INSERT: '[Inst] New',
        UPDATE: '[Inst] Update',
        FETCH: '[Inst] Fetch',
    },
    Doctor: {
        SET_ACTIVE: '[Doc] Set',
        CLEAR_ACTIVE: '[Doc] Clear',
        INSERT: '[Doc] New',
        UPDATE: '[Doc] Update',
        FETCH: '[Doc] Fetch',
    },
    Paciente: {
        SET_ACTIVE: '[Pax] Set',
        CLEAR_ACTIVE: '[Pax] Clear',
        INSERT: '[Pax] New',
        UPDATE: '[Pax] Update',
        FETCH: '[Pax] Fetch',
    },
    Analisis: {
        SET_ACTIVE: '[Als] Set',
        CLEAR_ACTIVE: '[Als] Clear',
        INSERT: '[Als] New',
        UPDATE: '[Als] Update',
        FETCH: '[Als] Fetch',
    },
    Componente: {
        SET_ACTIVE: '[Comp] Set',
        CLEAR_ACTIVE: '[Comp] Clear',
        INSERT: '[Comp] New',
        UPDATE: '[Comp] Update',
        FETCH: '[Comp] Fetch',
    },
    Orden: {
        SET_ACTIVE: '[Orden] Set',
        CLEAR_ACTIVE: '[Orden] Clear',
        INSERT: '[Orden] New',
        UPDATE: '[Orden] Update',
        Fetch: {
            ITEM: '[Orden] Fetch item',
            DEFAULT: '[Orden] Fetch default',
            TIPO_PAGO: '[Orden] Fetch tipos de pago',
            CFDI: '[Orden] Fetch uso de cfdi',
        },
        Nuevo: {
            START_ORDEN: '[Orden] Nueva orden',
            General: {
                SET_PACIENTE: '[Orden] Set paciente',
                Doctor: {
                    SET_DOCTOR: '[Orden] Set doctor',
                    ENABLE_DISABLE: '[Orden] Enable disable doctor',
                },
                Institucion: {
                    SET_INSTITUCION: '[Orden] Set insitucion',
                    ENABLE_DISABLE: '[Orden] Enable disable insitucion',
                },
            },
            Analisis: {
                SET_ANALISIS: '[Orden] Set analisis',
                ADD_ANALISIS: '[Orden] Add analisis',
                REMOVE_ANALISIS: '[Orden] Remove analisis',
            },
            Facturacion: {
                ENABLE_DISABLE: '[Orden] Enable disable facturacion',
                SET_FACTURACION: '[Orden] Set facturacion',
            },
            Totales: {
                SET_TOTALES: '[Orden] Set totales'
            },
            SET_FECHA_ENTREGA: '[Orden] Set fecha entrega',
            SET_COMENTARIOS: '[Orden] Set comentarios',
            SET_PAGO: '[Orden] Set pago',
        },
    },
}