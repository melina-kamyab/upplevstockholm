$(function() {
  sessionStorage.removeItem("cart");
  generateOrderNumber();
  changeCartIcon();
});

function changeCartIcon() {
  $(".cart-icon").attr("data-number-of-items", "0");
  $(".cart-icon").removeClass("cart-items");
}

function generateOrderNumber() {
  $("#ordernumber").text(
    "Ditt ordernummer är " +
      Math.floor(Math.random() * (1000 - 800) + 800) +
      ". Spara detta nummer och ange det när du ska använda din upplevelse!"
  );
}
