



function getData (statusClass, coinClass, cashClass, cashlessClass, summaryClass, idToken) {
    const coinField = document.querySelector(coinClass),
          cashField = document.querySelector(cashClass),
          cashlessField = document.querySelector(cashlessClass),
          summaryField = document.querySelector(summaryClass),
          statusField = document.querySelector(statusClass),
          postButtons = document.querySelectorAll('.post_button');

    let i = 1;
    let dataLink = `https://wash-app-d9b1b-default-rtdb.europe-west1.firebasedatabase.app/post${i}.json`;

    postButtons.forEach((but, num) => {
        if (but.classList.contains('btn-light')) {  /*определяем на каком посте произвести инкасацию*/
            i = num + 1;
        }
    })

    function requestOnServer () {
        fetch(`https://wash-app-d9b1b-default-rtdb.europe-west1.firebasedatabase.app/post${i}.json`, {
            method: 'GET'
        })
         .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error(response.status)
            }
         })
         .then(json => {
            coinField.innerHTML = json.coin;
            cashField.innerHTML = json.cash;
            cashlessField.innerHTML = json.cashless;
            summaryField.innerHTML = json.summary;

            if (json.status) {
                statusField.innerHTML = 'Работает';
                statusField.style.color = '#00FF00'
            } else {
                statusField.innerHTML = 'Не работает'
                statusField.style.color = '#FF0000'
            }
         })
         .catch(error => {
            statusField.innerHTML = `Ошибка получения данных с сервера: ${error}`;
            statusField.style.color = '#FF0000';
            coinField.innerHTML = '';
            cashField.innerHTML = '';
            cashlessField.innerHTML = '';
            summaryField.innerHTML = '';
         })
    }
    
    postButtons.forEach((item, num) => {
        item.addEventListener('click', (e) => {
            postButtons.forEach((button) => {
                button.classList.remove('btn-light');  /*устанавливаем стили для кнопок по умолчанию*/
                if (!button.classList.contains('btn-outline-light')) {
                    button.classList.add('btn-outline-light');
                }
            })

            if (e.target === item) {                   /*устанавливаем стиль для нужной кнопки и формируем ссылку на нужный пост*/
                item.classList.remove('btn-outline-light');
                item.classList.add('btn-light');
                i = num + 1;
                dataLink = `https://wash-app-d9b1b-default-rtdb.europe-west1.firebasedatabase.app/post${i}.json`;
            }

            if(idToken) {
                requestOnServer()
            }
            
        })
    })

    if(idToken) {                                      /*выполнится при успешной авторизации*/
        document.querySelector('.main_container').style.display = 'block';
        document.querySelector('.modal_background').style.display = 'none';
        document.querySelector('.open_modal').innerHTML = "Выйти";
        requestOnServer();
    }
    
    
    
          
}

export default getData;