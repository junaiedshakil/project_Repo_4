const countHeart = document.getElementById("count-heart");
const spanCount = countHeart.querySelector("span");
let heartCount = 0;
const cardSection = document.querySelector(".card-section");

cardSection.addEventListener("click", function (event) {
  if (
    event.target.id === "heart-icon" ||
    event.target.classList.contains("fa-heart")
  ) {
    heartCount++;
    spanCount.textContent = heartCount;
  }
});

