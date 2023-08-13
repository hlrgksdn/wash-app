'use strict';

import login from './components/login';
import getData from './components/getData';

import './css/style.css';

window.addEventListener('DOMContentLoaded', ()=> {
    login('.openModal',".modal_background");
    getData('.coin_field', '.cash_field', '.cashless_field');
})