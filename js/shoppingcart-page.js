$(function () {
  $(".checkout-btn").on("click", () => {
    window.open("checkout.html", "_self");
  });
  changeCartIcon();
  createHtmlforCart();
});

function changeCartIcon() {
  let totalAmount = 0;
  let cartItems = [];

  if (sessionStorage.getItem("cart") !== null) {
    cartItems = JSON.parse(sessionStorage.getItem("cart"));
    $.each(cartItems, (i, cartItem) => {
      totalAmount += cartItem.amount;
    });
    $(".cart-icon").addClass("cart-items");
  } else {
    totalAmount = 0;
    $(".cart-icon").removeClass("cart-items");
  }

  $(".cart-icon").attr("data-number-of-items", totalAmount);
}

function createHtmlforCart() {
  let itemsInCart = JSON.parse(sessionStorage.getItem("cart"));
  $('.shoppingcart-items-container').html('');
  let itemTotalCost = 0;
  let sumOfAllExperiences = 0;

  if (itemsInCart === null) {
    $("<p>")
      .text("Varukorgen är tom.")
      .appendTo(".shoppingcart-items-container");
    $(".price").text(sumOfAllExperiences + " kr");
    $(".checkout-btn").attr("disabled", true);
  } else {
    $.each(itemsInCart, (i, item) => {
      itemTotalCost = parseInt(item.amount) * parseInt(item.experienceItem.Price);
      sumOfAllExperiences += itemTotalCost;

      let container = $("<div>")
        .addClass("item-container")
        .attr("id", item.experienceItem.Id)
        .appendTo($(".shoppingcart-items-container"));

      let detailsContainer = $("<div>")
        .addClass("details-container")
        .appendTo($(".shoppingcart-items-container"));

      $("<h5>").text(item.experienceItem.Title).appendTo(container);
      $("<img>")
        .attr("src", item.experienceItem.Image)
        .addClass("image")
        .appendTo(container);

        $("<button>")
        .addClass("decrease-item-amount, fas fa-minus")
        .appendTo(detailsContainer)
        .on("click", function (){
          if ( item.amount <= 1){
            $(this).attr('disabled',true);
          }
          item.amount--;
          sessionStorage.setItem("cart", JSON.stringify(itemsInCart));
          createHtmlforCart();
          changeCartIcon();
        });

        $("<input>")
        .addClass("show-Amount")
        .attr('value',item.amount)
        .attr('type','number')
        .appendTo(detailsContainer);

      $("<button>")
        .addClass("increase-item-amount, fas fa-plus")
        .appendTo(detailsContainer)
        .on("click", function () {
          item.amount++;
          sessionStorage.setItem("cart", JSON.stringify(itemsInCart));
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