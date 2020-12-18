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
//Spara vi koden ovan så får vi inget fel medelande. det är alltså Sphies orginal kod.

// function changeCartIcon() {
//   let totalAmount = 0;
//   let cartItems = JSON.parse(sessionStorage.getItem("cart"));

//   if (cartItems.length !== null) {
//     $.each(cartItems, (i, cartItem) => {
//       totalAmount += cartItem.amount;
//     });
//     $(".cart-icon").addClass("cart-items");
//   } else {
//     totalAmount = 0;
//     $(".cart-icon").removeClass("cart-items");
//   }

//   $(".cart-icon").attr("data-number-of-items", totalAmount);
// }