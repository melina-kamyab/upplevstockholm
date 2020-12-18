$(function () {
  changeCartIcon();
});

function changeCartIcon() {
  let totalAmount = 0;
  let cartItems = JSON.parse(sessionStorage.getItem("cart"));

  if (cartItems !== null) { // vet inte varför felmedelandet försvinner när jag tar bort .length på just denna rad.
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