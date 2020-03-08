$("#add-burger").on("click", (event)=> {
    //avoind page reload
    event.preventDefault();

    const  newBurger = {
        name: $("#burger-name").val().trim()
    }

    alert(newBurger.name);

    //AJAX CALL
})
