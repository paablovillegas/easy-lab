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
            FECHAS: '[Orden] Fetch fechas',
            PACIENTE: '[Orden] Fetch paciente',
            DOCTOR: '[Orden] Fetch doctor',
            INSTITUCION: '[Orden] Fetch institucion',
            ANALISIS: '[Orden] Fetch analisis',
            ESTATUS: '[Orden] Fetch estatus',
        },
        Nuevo: {
            START_ORDEN: '[Orden] Nueva orden',
            General: {
                SET_PACIENTE: '[Orden] Nueva set paciente',
                Doctor: {
                    SET_DOCTOR: '[Orden] Nueva set doctor',
                    ENABLE_DOCTOR: '[Orden] Nueva enable doctor',
                    DISABLE_DOCTOR: '[Orden] Nueva disable doctor',
                },
                Institucion: {
                    SET_INSTITUCION: '[Orden] Nueva set insitucion',
                    ENABLE_INSTITUCION: '[Orden] Nueva enable insitucion',
                    DISABLE_INSTITUCION: '[Orden] Nueva disable insitucion',
                }
            },
            Analisis: {
                SET_ANALISIS: '[Orden] Nueva set analisis',
                ADD_ANALISIS: '[Orden] Nueva add analisis',
                REMOVE_ANALISIS: '[Orden] Nueva remove analisis',
            },
        },
    },
}