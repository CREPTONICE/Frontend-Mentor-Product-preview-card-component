let buy = document.getElementById("add");
let text = document.getElementById("text");
let image = document.getElementById("image");
let cart = document.getElementById("Cart");

buy.addEventListener("click", (e) => {
  e.preventDefault;

  text.classList.add("close-text");
  image.classList.add("close-image");

  setTimeout(() => {
    cart.style.display = "block";
  }, 1500);
});
