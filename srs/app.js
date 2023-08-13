'use strict';

import login from './components/login';
import getData from './components/getData';
import autorisation from './components/authorisation';

import './css/style.css';

window.addEventListener('DOMContentLoaded', ()=> {
    const authWindow = document.querySelector('.auth_window');

    let idToken;
    // login('.openModal',".modal_background");
    // getData('.coin_field', '.cash_field', '.cashless_field', idToken);

    authWindow.addEventListener('submit', (e) => {
        e.preventDefault();
        autorisation('.modal_background')
        .then(data => idToken = data.idToken)
        .then(() => {
            getData('.coin_field', '.cash_field', '.cashless_field', idToken);
            console.log(idToken);
        })
    })
        
        //  .then(data => idToken = data.idToken);
   

    
})