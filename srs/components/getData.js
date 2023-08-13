function getData (coinClass, cashClass, cashlessClass, idToken) {
    const coinField = document.querySelector(coinClass),
          cashField = document.querySelector(cashClass),
          cashlessField = document.querySelector(cashlessClass),
          postButtons = document.querySelectorAll('.post_button');

    let postNum = 1;
    let dataLink = `https://wash-app-d9b1b-default-rtdb.europe-west1.firebasedatabase.app/post${postNum}.json?auth=${idToken}`;
    
    postButtons.forEach((item, num) => {
        item.addEventListener('click', (e) => {
            postButtons.forEach((button) => {
                button.classList.remove('btn-light');
                if (!button.classList.contains('btn-outline-light')) {
                    button.classList.add('btn-outline-light');
                }
            })

            if (e.target === item) {
                item.classList.remove('btn-outline-light');
                item.classList.add('btn-light');
                postNum = num + 1;
                dataLink = `https://wash-app-d9b1b-default-rtdb.europe-west1.firebasedatabase.app/post${postNum}.json?`;
            }

            if(idToken) {
                fetch(dataLink, {
                    method: 'GET'
                })
                 .then(response => response.json())
                 .then(json => {
                    coinField.innerHTML = json.coin;
                    cashField.innerHTML = json.cash;
                    cashlessField.innerHTML = json.cashless;
                 })
            }
            
        })
    })

    if(idToken) {
        document.querySelector('.main_container').style.display = 'block';
        document.querySelector('.modal_background').style.display = 'none';
        document.querySelector('.openModal').innerHTML = "Выйти";
        fetch(dataLink, {
            method: 'GET'
        })
         .then(response => response.json())
         .then(json => {
            coinField.innerHTML = json.coin;
            cashField.innerHTML = json.cash;
            cashlessField.innerHTML = json.cashless;
         })
    }
    
    
    
          
}

export default getData;