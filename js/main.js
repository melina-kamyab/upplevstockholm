//const {Console} = require("console");
let cartItems = [];

$(function () {
  changeCartIconNumber();

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
  if (window.location.pathname === "/experiences.html") {
    //Kör createHTML om vi är på experiences.html
    createExperiencesHTML();
  }
});

function createExperiencesHTML() {
  $.each(listOfExperience, (i, experience) => {
    let container = $("<div>")
      .addClass("item-container")
      .attr("id", experience.Id)
      .appendTo($("." + experience.Subcategory.toLowerCase()));

    $("<h5>").text(experience.Title).appendTo(container);
    $("<img>")
      .attr("src", experience.Image)
      .addClass("image")
      .appendTo(container);
    $("<p>").text(experience.Description).appendTo(container);
    $("<p>")
      .text(experience.Price + " kr")
      .appendTo(container);
    $("<button>")
      .attr("type", "button")
      .attr("class", "buy-btn")
      .text("Köp")
      .appendTo(container)
      .on("click", function () {
        //Lägger till klicklyssnare per knapp som skapas
        addToCart(
          experience,
          $(this).closest("div").attr("id")
        );
      });
  });
}

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

  $.each(valuesList, (i, input) => {
    //Går igenom listan och kollar om något fält har mindre än 3 bokstäver och markerar det fältet i rött om det finns. validated variabeln sätts till false.
    if (input.val().length < 3) {
      input.css("border", "1px solid red");
      validated = false;
    }
  });

  if (validated === false) {
    //Om valideringen inte gick igenom vill vi också skriva ut en text till användaren. Om användaren trycker på knappen fler ggr utan att ha fixat alla fälten tar vi bort meddelandet först innan vi skriver ut det igen.
    if ($("#error-message")) {
      $("#error-message").remove();
    }
    $("<p>")
      .attr("id", "error-message")
      .text("Du behöver fylla i det rödmarkerade fältet korrekt")
      .css("color", "red")
      .appendTo($(".payment-details"));
  }

  if (validated === true) {
    //Om valideringen gått igenom går vi vidare till tacksidan!
    window.open("thankspage.html", "_self");
  }
}

function addToCart(experienceItem, productId) {
  //Nr.6 i To do
  let existsInCart = false; //Flagga för att se om upplevelsen redan finns i varukorgen
  if (sessionStorage.getItem("cart") !== null) {
    cartItems = JSON.parse(sessionStorage.getItem("cart"));
  }

  $.each(cartItems, (i, cartItem) => {
    //Går igenom varukorgen och kollar ifall samma produkt redan finns i varukorgen
    if (cartItem.experienceItem.Id === parseInt(productId)) {
      //Om det finns i varukorgen redan utökar vi istället det befintliga objektets amount med +1 och ändrar vår flagga (existsInCart) till true eftersom det fanns i varukorgen redan
      cartItem.amount++;
      existsInCart = true;
    }
  });

  if (existsInCart === false) {
    //Om produkten inte redan fanns i varukorgen, skapar vi och lägger till newCartObject till varukorgen.
    let newCartObject = {
      //Nytt objekt skapas upp
      experienceItem,
      amount: 1,
    };
    cartItems.push(newCartObject);
  }

  sessionStorage.setItem("cart", JSON.stringify(cartItems)); //Pushar upp den uppdaterade varukorgen till sessionStorage
  changeCartIconNumber(); //Anropar funktion för att ändra siffran på varukorgen
}

function changeCartIconNumber() {
  //Nr. 9 i To do
  let totalAmount = 0;

  if (sessionStorage.getItem("cart") !== null) {
    cartItems = JSON.parse(sessionStorage.getItem("cart"));
  }

  $.each(cartItems, (i, cartItem) => {
    totalAmount += cartItem.amount;
  });

  if ($(".cart-icon").hasClass("cart-items") === false && sessionStorage.getItem("cart") !== null) {
    $(".cart-icon").addClass("cart-items");
  } 

  $(".cart-icon").attr("data-number-of-items", totalAmount);
}
