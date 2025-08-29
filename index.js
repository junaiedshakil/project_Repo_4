const countHeart = document.getElementById("count-heart");
const spanHeartCount = countHeart.querySelector("span");
let heartCount = 0;
const coinButton = document.querySelector(".btn-coin");
const spanCoinCount = coinButton.querySelector("span");
let coinCount = parseInt(spanCoinCount.textContent) || 100;
const cardSection = document.querySelector(".card-section");
const callHistoryList = document.getElementById("call-history-list");
const copyButton = document.querySelector(".btn-copy");
const spanCopyCount = copyButton.querySelector("span");
let copyCount = parseInt(spanCopyCount.textContent) || 0;

cardSection.addEventListener("click", function (event) {
  if (
    event.target.id === "heart-icon" ||
    event.target.classList.contains("fa-heart")
  ) {
    heartCount = heartCount + 1;
    spanHeartCount.textContent = heartCount;
  }

  if (
    event.target.id === "yz" ||
    event.target.classList.contains("call-btn") ||
    event.target.classList.contains("fa-phone-volume")
  ) {
    const card = event.target.closest(".cards");
    if (card) {
      const serviceName = card.querySelector("h3").textContent;
      const serviceNumber = card.querySelector("h2").textContent;
      const currentTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
      });

      if (coinCount < 20) {
        alert("Insufficient coins! You need at least 20 coins to make a call.");
        return;
      }

      coinCount = coinCount - 20;
      spanCoinCount.textContent = coinCount;
      alert("Calling " + serviceName + ": " + serviceNumber);

      if (callHistoryList) {
        const historyItem = document.createElement("div");
        historyItem.textContent =
          "Service: " +
          serviceName +
          ", Number: " +
          serviceNumber +
          ", Time: " +
          currentTime;
        callHistoryList.appendChild(historyItem);
      }
    }
  }

  if (event.target.id === "y") {
    const card = event.target.closest(".cards");
    if (card) {
      const serviceNumber = card.querySelector("h2").textContent;
      try {
        navigator.clipboard.writeText(serviceNumber);
        alert("Copied: " + serviceNumber);
        copyCount = copyCount + 1;
        spanCopyCount.textContent = copyCount;
      } catch (err) {
        alert("Failed to copy. Please copy manually: " + serviceNumber);
      }
    }
  }
});

const lastBtn = document.getElementById("last-btn");
lastBtn.addEventListener("click", function () {
  if (callHistoryList) {
    callHistoryList.innerHTML = "";
    localStorage.removeItem("callHistory");
  }
});
