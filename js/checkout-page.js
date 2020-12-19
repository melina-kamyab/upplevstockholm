$(function () {
  $("#purchase-btn").on("click", () => {
    validateForm();
  });
  changeCartIcon();
  createHtmlforCheckout();
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

function createHtmlforCheckout() {
  let itemsInCart = JSON.parse(sessionStorage.getItem("cart"));
  let itemTotalCost = 0;
  let sumOfAllExperiences = 0;

  $.each(itemsInCart, (i, item) => {
    itemTotalCost = parseInt(item.amount) * parseInt(item.experienceItem.Price);
    sumOfAllExperiences += itemTotalCost;
  });
  $(".price").text(sumOfAllExperiences + " kr");
}

function validateForm() {
  let validated = true;
  let valuesList = [];

  valuesList.push(
    $("#input-first-name"),
    $("#input-last-name"),
    $("#input-email"),
    $("#input-card-number"),
    $("#input-valid-to"),
    $("#input-cvv-cvc")
  );

  $.each(valuesList, (i, input) => {
    if (input.val().length < 3) {
      input.css("border", "1px solid red");
      validated = false;
    }
  });

  if (validated === false) {
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
    window.open("thankspage.html", "_self");
  }
}
