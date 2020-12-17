$(function () {
  changeCartIcon();
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

function changeAmountOfItemsInShoppingcart() {
  console.log("till Marvin");
}
