const submitButton = document.getElementById('submit-form');

const titleEl = document.getElementById('title');
submitButton.addEventListener('submit', function(event) {
        event.preventDefault(); //acchiappo l'invio del form
        if(titleEl.value.trim() == 0){
            titleEl.classList.add('is-invalid');
        }
        
    });