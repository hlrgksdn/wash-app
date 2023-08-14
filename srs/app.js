'use strict';

import getData from './components/getData';
import autorisation from './components/authorisation';
import incasation from './components/incasation';

import './css/style.css';

window.addEventListener('DOMContentLoaded', ()=> {
    const authWindow = document.querySelector('.auth_window'),
          incasationButton = document.querySelector('.incasation');

    let idToken;

    authWindow.addEventListener('submit', (e) => {
        e.preventDefault();
        autorisation('.auth_window')
        .then(data => idToken = data.idToken)
        .then(() => {
            getData('.status_field','.coin_field', '.cash_field', '.cashless_field', '.summary_field', idToken);
        })
    })

    incasationButton.addEventListener('click', () => {
        incasation(idToken); 
    })
        
   

    
})