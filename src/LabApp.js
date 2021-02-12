import dayjs from 'dayjs';
import 'dayjs/locale/es';
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store/store';
import { AppRouter } from './routers/AppRouter'

dayjs.locale('es');

export const LabApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}
