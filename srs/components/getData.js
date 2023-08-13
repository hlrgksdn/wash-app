function getData (coinClass, cashClass, cashlessClass,) {
    const coinField = document.querySelector(coinClass),
          cashField = document.querySelector(cashClass),
          cashlessField = document.querySelector(cashlessClass),
          postButtons = document.querySelectorAll('.post_button');

    let postNum = 1;
    let dataLink = `https://wash-app-d9b1b-default-rtdb.europe-west1.firebasedatabase.app/post${postNum}.json`;
    
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
                dataLink = `https://wash-app-d9b1b-default-rtdb.europe-west1.firebasedatabase.app/post${postNum}.json`;
                console.log(dataLink);
            }

            fetch(dataLink, {
                method: 'GET'
            })
             .then(response => response.json())
             .then(json => {
                coinField.innerHTML = json.coin;
                cashField.innerHTML = json.cash;
                cashlessField.innerHTML = json.cashless;
             })
            
        })
    })

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

export default getData;