import getData from "./getData";

function incasation (idToken) {
    const incasationModal = document.querySelector('.incasation_wrapper'),
          sucsessButton = incasationModal.querySelector('.btn-success'),
          declineButton = incasationModal.querySelector('.btn-danger'),
          postButtons = document.querySelectorAll('.post_button');
    let i;
    

    postButtons.forEach((but, num) => {
        if (but.classList.contains('btn-light')) {  /*определяем на каком посте произвести инкасацию*/
            i = num + 1;
        }
    })

    incasationModal.style.display = 'block';

    sucsessButton.addEventListener('click', ()=> {
        fetch(`https://wash-app-d9b1b-default-rtdb.europe-west1.firebasedatabase.app/post${i}.json`, {
            method: "PATCH",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                cash: 0,
                cashless: 0,
                coin: 0
            })
        })
         .then(() => {
            incasationModal.style.display = 'none';
            getData('.status_field','.coin_field', '.cash_field', '.cashless_field', '.summary_field', idToken);
        })
        
          
    })

    declineButton.addEventListener('click', ()=>{
        incasationModal.style.display = 'none';
    })


    
    
}

export default incasation;