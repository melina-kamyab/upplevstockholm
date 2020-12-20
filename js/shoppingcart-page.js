$(function () {
  $(".checkout-btn").on("click", () => {
    window.open("checkout.html", "_self");
  });
  changeCartIcon();
  createHtmlforCart();
});

function changeCartIcon() {
  let totalAmount = 0;
  let cartItems = JSON.parse(sessionStorage.getItem("cart"));

  if (cartItems && cartItems.length !== 0) {
    $.each(cartItems, (i, cartItem) => {
      totalAmount += cartItem.amount;
    });
    $(".cart-icon").addClass("cart-items");
  }
  if (totalAmount === 0) {
    $(".cart-icon").removeClass("cart-items");
  }

  $(".cart-icon").attr("data-number-of-items", totalAmount);
}

function createHtmlforCart() {
  let cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
  $(".shoppingcart-items-container").html("");
  let itemTotalCost = 0;
  let sumOfAllExperiences = 0;

  if (cartItems && cartItems.length === 0) {
    $("<p>")
      .text("Varukorgen är tom.")
      .appendTo(".shoppingcart-items-container");
    $(".price").text(sumOfAllExperiences + " kr");
    $(".checkout-btn").attr("disabled", true);
  } else {
    $.each(cartItems, (i, item) => {
      itemTotalCost =
        parseInt(item.amount) * parseInt(item.experienceItem.Price);
      sumOfAllExperiences += itemTotalCost;

      let bigContainer = $("<div>")
        .addClass("big-container")
        .appendTo(".shoppingcart-items-container");

      let container = $("<div>")
        .addClass("item-container")
        .attr("id", item.experienceItem.Id)
        .appendTo(bigContainer);

      let detailsContainer = $("<div>")
        .addClass("details-container")
        .appendTo(bigContainer);

      $("<h5>").text(item.experienceItem.Title).appendTo(container);
      $("<img>")
        .attr("src", item.experienceItem.Image)
        .addClass("image")
        .appendTo(container);

      $("<button>")
        .addClass("decrease-item-amount, fas fa-minus")
        .appendTo(detailsContainer)
        .on("click", function () {
          if (item.amount <= 1) {
            // alert('Are you sure you want to remove this item?');
            cartItems.splice(i, 1);
          }
          item.amount--;
          sessionStorage.setItem("cart", JSON.stringify(cartItems));
          createHtmlforCart();
          changeCartIcon();
        });

      $("<input>")
        .addClass("show-amount")
        .attr("value", item.amount)
        .attr("type", "text")
        .appendTo(detailsContainer);

      $("<button>")
        .addClass("increase-item-amount, fas fa-plus")
        .appendTo(detailsContainer)
        .on("click", function () {
          item.amount++;
          sessionStorage.setItem("cart", JSON.stringify(cartItems));
          createHtmlforCart();
          changeCartIcon();
        });

      $("<p>")
        .addClass(".total-price-per-item")
        .text(itemTotalCost + " kr")
        .appendTo(detailsContainer);
    });
    $(".price").text(sumOfAllExperiences + " kr");
  }
}
function removeShoppingcartItem(item) {
  console.log("i have been removed");
  let cartItems = JSON.parse(sessionStorage.getItem("cart"));
  console.log(cartItems);
}
