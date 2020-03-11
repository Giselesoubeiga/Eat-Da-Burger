$(() => {
  //ADD BURGER ACTION
  $("#add-burger").on("click", event => {
    //avoind page reload
    event.preventDefault();

    const newBurger = {
      name: $("#burger-name")
        .val()
        .trim()
    };

    // alert(newBurger.name);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //UPDATE BURGER ACTION
  $(".btn-devour").on("click", function(event) {
    event.preventDefault();
    const burger_id = $(this).attr("data-id");
    // alert(burger_id);
    const devouredState = {
        devoured: true
      };

    // Send the PUR request.
    $.ajax(`/api/burgers/${burger_id}`, {
        type: "PUT",
        data: devouredState
      }).then(
        () => {
          console.log("updated burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });
});
