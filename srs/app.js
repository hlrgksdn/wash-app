'use strict';

import getData from './components/getData';
import autorisation from './components/authorisation';
import incasation from './components/incasation';

import './css/style.css';

window.addEventListener('DOMContentLoaded', ()=> {
    const authWindow = document.querySelector('.auth_window'),
          incasationButton = document.querySelector('.incasation'),
          errorMesage = document.querySelector('.error_mesage');

    let idToken = localStorage.getItem('user');

    if (idToken) {
        authWindow.style.display = 'none';
        getData('.status_field','.coin_field', '.cash_field', '.cashless_field', '.summary_field', idToken);
    }

    authWindow.addEventListener('submit', (e) => {
        e.preventDefault();
        autorisation('.auth_window')
        .then(response => {
            if (response.ok) {
               return response.json()
            } else {
                throw new Error (response.status)
            }
        })
        .then(data => {
            localStorage.setItem('user', data.idToken);
            idToken = localStorage.getItem('user')
        })
        .then(() => {
            getData('.status_field','.coin_field', '.cash_field', '.cashless_field', '.summary_field', idToken);
        })
        .catch(error => {
            errorMesage.innerHTML = `Ошибка авторизации: ${error}`;
            errorMesage.style.display = 'block';
        })
    })

    incasationButton.addEventListener('click', () => {
        incasation(idToken); 
    })
   
})