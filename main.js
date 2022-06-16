
// ? Mi scrivo una funzione per richiamare elementi HTML by id
let id = (id) => document.getElementById(id);

// ? mi richiamo tutti i campi del form by id
let title = id("title"),
    description = id("description"),
    beds_number = id("beds_number"),
    rooms_number = id("rooms_number"),
    bathrooms_number = id("bathrooms_number"),
    square_meters = id("square_meters"),
    price_per_night = id("price_per_night"),
    is_visible = id("is_visible"),
    address = id("address"),
    image_path = id("image_path"),
    submitButton = id("submit-form");

//let classes = (classes) => document.getElementsByClassName(classes);

submitButton.addEventListener('submit', function(event) {
        event.preventDefault(); //acchiappo l'invio del form
        if(title.value.trim() == 0){
            title.classList.add('is-invalid');
        }
        
    });