//const {Console} = require("console");
let cartItems = [];
let sumOfAllExperiences = 0;

$(function () {
  changeCartIconNumber();

  // Lyssnare sätts på knapp checkout-btn om vi befinner oss på shoppingcart.html
  if (window.location.pathname === "/shoppingcart.html") {
    $("#checkout-btn").on("click", () => {
      window.open("checkout.html", "_self");
    });
    createHtmlforCart();
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
        addToCart(experience, $(this).closest("div").attr("id"));
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
  //Nr.5 i To do
  let existsInCart = false; //Flagga för att se om upplevelsen redan finns i varukorgen
  if (sessionStorage.getItem("cart") !== null) {
    //Om det finns några varor i sessionstorage så ska vår tomma lista (cartItems) ersättas med det som finns i sessionStorage
    cartItems = JSON.parse(sessionStorage.getItem("cart"));
  }

  $.each(cartItems, (i, cartItem) => {
    //Går igenom varukorgen och kollar ifall samma produkt redan finns i varukorgen
    if (cartItem.experienceItem.Id === parseInt(productId)) {
      //Om det finns i varukorgen adderar vi istället det befintliga objektets amount med +1 och ändrar vår flagga (existsInCart) till true eftersom det fanns i varukorgen redan
      cartItem.amount++;
      existsInCart = true;
    }
  });

  if (existsInCart === false) {
    //Om produkten inte redan fanns i varukorgen, skapar vi istället ett nytt objekt som innehåller Experience objektet + en ny egenskap amount för att hålla redan på antal. Detta nya objekt läggs till i varukorgen.
    let newCartObject = {
      experienceItem,
      amount: 1,
    };
    cartItems.push(newCartObject);
  }

  sessionStorage.setItem("cart", JSON.stringify(cartItems)); //Pushar upp den uppdaterade varukorgen till sessionStorage
  changeCartIconNumber(); //Anropar funktion för att ändra siffran på varukorgen uppe till höger på hemsidan
}

function changeCartIconNumber() {
  //Nr. 8 i To do
  let totalAmount = 0;

  if (sessionStorage.getItem("cart") !== null) {
    //Om det finns några varor i sessionstorage så ska vår tomma lista (cartItems) ersättas med det som finns i sessionStorage
    cartItems = JSON.parse(sessionStorage.getItem("cart"));
  }

  $.each(cartItems, (i, cartItem) => {
    //För varje objekt i listan vill vi nu addera det amount objektet har i varukorgen till vår variabel totalAmount. För varje gång loopen körs kommer totalAmount att växa
    totalAmount += cartItem.amount;
  });

  if (
    $(".cart-icon").hasClass("cart-items") === false &&
    sessionStorage.getItem("cart") !== null
  ) {
    //Om klassen .cart-items inte finns på .cart-icon vill vi lägga till den klassen så att siffran för antalet varor syns
    $(".cart-icon").addClass("cart-items");
  }

  $(".cart-icon").attr("data-number-of-items", totalAmount); //Vi sätter den totala siffran från totalAmount på ikonen uppe till höger på hemsidan
}

function createHtmlforCart() {
  let itemsInCart = JSON.parse(sessionStorage.getItem("cart"));

  $.each(itemsInCart, (i, item) => {
    let container = $("<div>")
      .addClass("item-container")
      .attr("id", item.experienceItem.Id)
      .appendTo($(".shoppingcart-items-container"));

    $("<h5>").text(item.experienceItem.Title).appendTo(container);
    $("<img>")
      .attr("src", item.experienceItem.Image)
      .addClass("image")
      .appendTo(container);
    $("<p>")
      .text(item.experienceItem.Price + " kr")
      .appendTo(container);
    $("<p>").text(item.amount).appendTo(container);
    $("<button>")
      .addClass("increase-item-amount")
      .text("+")
      .appendTo(container)
      .on("click", () => {
        changeAmountOfItemsInShoppingcart();
      });
    $("<button>")
      .addClass("decrease-item-amount")
      .text("-")
      .appendTo(container)
      .on("click", () => {
        changeAmountOfItemsInShoppingcart();
      });

    let itemAmount = parseInt(item.amount);
    let itemPrice = parseInt(item.experienceItem.Price);
    let totalAmountPerItem = itemAmount * itemPrice;

    $("<p>")
      .addClass(".total-price-per-item")
      .text(totalAmountPerItem)
      .appendTo(container);

    sumOfAllExperiences += totalAmountPerItem;
    $(".price").text(sumOfAllExperiences);

    // if (itemAmount < 1) {
    //   //Ta bort upplevelsen
    // }
  });
}

//Till Marvin
function changeAmountOfItemsInShoppingcart() {
  console.log("till Marvin");
}
