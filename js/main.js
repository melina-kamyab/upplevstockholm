//const {Console} = require("console");
let cartItems = [];

$(function () {
  // Lyssnare sätts på knapp checkout-btn om vi befinner oss på shoppingcart.html
  if (window.location.pathname === "/shoppingcart.html") {
    $("#checkout-btn").on("click", () => {
      window.open("checkout.html", "_self");
    });
  }

  // Lyssnare sätts på knapp checkout-btn om vi befinner oss på checkout.html
  if (window.location.pathname === "/checkout.html") {
    $("#purchase-btn").on("click", () => {
      validateForm();
    });
  }

  $.each(listOfExperience, (i, experience) => {
    let container = $("<div>").addClass("item-container");
    let header = $("<h5>");
    header.text(experience.Title);

    let image = $("<img>").attr("src", experience.Image).addClass("image");

    let description = $("<p>");
    description.text(experience.Description);

    let price = $("<p>");
    price.text(experience.Price);

    //Appendings, dessa bör gå in i en separat funktion, se createHTML() nedan!
    header.appendTo(container);
    image.appendTo(container);
    description.appendTo(container);
    price.appendTo(container);
    console.log(experience.Category);
    $(container).appendTo($("." + experience.Subcategory.toLowerCase()));
    createHTML();
  });
});

function createHTML() {}

function validateForm() {
  let validated = true; //Variabel för att hålla reda på om valideringen blev godkänd
  let valuesList = []; //Lista att lägga alla input element i

  valuesList.push(
    $("#input-first-name"),
    $("#input-last-name"),
    $("#input-email"),
    $("#input-card-number"),
    $("#input-valid-to"),
    $("#input-cvv-cvc")
  );

  $.each(valuesList, (i, input) => { //Går igenom listan och kollar om något fält har mindre än 3 bokstäver och markerar det fältet i rött om det finns. validated variabeln sätts till false.
    if (input.val().length < 3) {
      input.css("border", "1px solid red");
      validated = false;
    }
  });

  if (validated === false) { //Om valideringen inte gick igenom vill vi också skriva ut en text till användaren. Om användaren trycker på knappen fler ggr utan att ha fixat alla fälten tar vi bort meddelandet först innan vi skriver ut det igen.
    if ($("#error-message")) {
      $("#error-message").remove();
    }
    $("<p>")
      .attr("id", "error-message")
      .text("Du behöver fylla i det rödmarkerade fältet korrekt")
      .css("color", "red")
      .appendTo($(".payment-details"));
}

  if (validated === true) { //Om valideringen gått igenom går vi vidare till tacksidan!
    window.open("thankspage.html", "_self");
  }
}

function addToCart(item) { //Nr.6 i To do
  console.log("Added to cart!");
  let newCartItem = new CartItem(item, 1);

  cartItems.push(newCartItem);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  changeCartIconNumber();
}

function changeCartIconNumber() { //Nr. 9 i To do
  console.log("Cart number changed!");
}