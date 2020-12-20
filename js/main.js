$(function () {
  changeCartIcon();
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
