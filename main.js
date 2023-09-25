//search button and links on nav bar
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const searchInput = document.querySelector("nav .links input[type='text']");

search.onclick = () => searchInput.classList.toggle("active");
toggle.onclick = () => toggle.classList.toggle("active");

// pictures silder and active bullets
const landing = document.querySelector(".landing");
const bullets = document.querySelectorAll(".landing .bullets span");
let i = 0;
let interval = setInterval(() => {
  i++;
  landing.style.backgroundImage = `url(images/space${i < 5 ? i : (i = 1)}.jpg`;
  bullets.forEach((e) => {
    if (i == e.dataset.pic) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
    e.onclick = function () {
      landing.style.backgroundImage = `url(images/space${e.dataset.pic}.jpg`;
      bullets.forEach((e) => e.classList.remove("active"));
      e.classList.add("active");
      clearInterval(interval);
    };
  });
}, 2000);
//change wallpaper in phones
let rightBtn = document.querySelector(".right");
let leftBtn = document.querySelector(".left");
rightBtn.onclick = function () {
  i++;
  landing.style.backgroundImage = `url(images/space${i < 5 ? i : (i = 1)}.jpg`;
  clearInterval(interval);
};
leftBtn.onclick = function () {
  i--;
  landing.style.backgroundImage = `url(images/space${i >= 1 ? i : (i = 4)}.jpg`;
  clearInterval(interval);
};
// PORTFLIO or gallery section suffle or filtertion
let allImg = document.querySelectorAll(".images picture img");
let allTitles = document.querySelectorAll(".title li");

allTitles.forEach((t) => {
  t.onclick = function () {
    allTitles.forEach((e) => e.classList.remove("active"));
    t.classList.add("active");
    allImg.forEach((i) => {
      if (t.textContent == "ALL") {
        i.parentElement.style.display = "block";
      } else if (t.textContent.toLowerCase() != i.getAttribute("alt")) {
        i.parentElement.style.display = "none";
      } else {
        i.parentElement.style.display = "block";
      }
    });
  };
});
// animation on increment numbers of statistics
let stats = document.querySelector(".about-us .bg-photo");
let allNums = document.querySelectorAll("h5");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stats.offsetTop - 200) {
    if (!started) {
      allNums.forEach((num) => {
        let goal = num.dataset.goal;
        let count = setInterval(() => {
          num.textContent++;
          if (num.textContent == goal) {
            clearInterval(count);
          }
        }, 500 / goal);
      });
    }
    started = true;
  }
});
