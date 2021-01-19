import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FormComponent } from './components/FormComponent';
import { faUser } from '@fortawesome/free-solid-svg-icons';

ReactDOM.render(
    <FormComponent placeholder="Nombre" icon={faUser} inputType="number"/>, 
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
