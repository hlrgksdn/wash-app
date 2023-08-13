function login (openButton, modal) {
    const open = document.querySelector(openButton),
          modalWindow = document.querySelector(modal);
          

    function openModal () {
        modalWindow.style.display = 'block';
    }   

    function closeModal () {
        modalWindow.style.display = 'none';
    }

    open.addEventListener('click', () => {
        openModal()
    })
    
    window.addEventListener('click', e => {
        if (e.target === modalWindow ) {
            closeModal();
        }
    })

    document.addEventListener('keydown', e =>{
        if (e.code === 'Escape' && modalWindow.style.display !== 'none') {
            closeModal();
        }
    })

    

}

export default login;