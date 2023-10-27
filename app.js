class Previewr {
  constructor(imageContainer, arrImages, currContainer) {
    this.imageContainer = document.querySelectorAll(imageContainer);
    this.images = arrImages;
    this.currContainer = currContainer;
    this.regex = /images\/image-product-\d|\.jpg/gi;
    this.imageContainer.forEach((image) => {
      image.addEventListener("click", (event) => {
        this.currContainer.src = event.target
          .getAttribute("src")
          .match(this.regex)
          .join("");
        if (document.querySelector(".active") != event.target) {
          document.querySelector(".active").classList.remove("active");
          event.target.classList.add("active");
        }
      });
    });
  }
}

class Counter {
  constructor(buttonPlus, valuesContainer, buttonMinus) {
    this.buttonPlus = buttonPlus;
    this.buttonMinus = buttonMinus;
    this.valuesContainer = valuesContainer;
    this.countValue = 0;
    this.CountDown();
    this.CountUp();}
  CountDown() {
    this.buttonPlus.addEventListener("click", (event) => {
      this.countValue++;
      this.valuesContainer.textContent = this.countValue;
    })}

  CountUp() {
    this.buttonMinus.addEventListener("click", (event) => {
      this.countValue > 0 ? this.countValue-- : 0;})

  }}
const arrImages = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];


const previewr = new Previewr(
  ".images-container img",
  arrImages,
  document.querySelector(".preview img")
  );
const countup = document.querySelector(".countup"),
  countdown = document.querySelector(".countdown");
const currValue = document.querySelector(".curr-amount");
const addtoCart = document.querySelector(".addtoCart");
const contentContainer = document.querySelector(".content-container");
const counter = new Counter(countup, currValue, countdown);
addtoCart.addEventListener("click", function () {
  console.log(currValue.textContent);
  if (currValue.textContent > 0) {
    Array.from(contentContainer.children).forEach((element) => {
      if (element === document.querySelector(".message")) {
        contentContainer.removeChild(element);
      }
    })

    
    let mainValue = `<section class="products">
        <section class="product-content">
            <img src="images/image-product-1-thumbnail.jpg" alt="">
            <p>Full Limited Edition Sneakers $125.00 * ${currValue.textContent} <span class="p">$${125.0 * currValue.textContent}</span></p>
        </section>
        <button class="checkout">Checkout</button>
    </section>`;
    contentContainer.innerHTML += mainValue
  }})