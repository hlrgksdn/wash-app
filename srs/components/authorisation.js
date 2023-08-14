function autorisation (modalClass) {
          
        const modalWindow = document.querySelector(modalClass),
              emailInput = modalWindow.querySelector('#mail'),
              passwordInput = modalWindow.querySelector('#pass'),
              apiKey = 'AIzaSyARVXr7TLP-Syn40SSryCQS1Mi66xVD1wc';
        
        let email = emailInput.value;
        let password = passwordInput.value;
              
              

        return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: 'POST',
            body: JSON.stringify({
                email, password,
                returnSecureTocken: true
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
            })
            
               
    
}

export default autorisation;