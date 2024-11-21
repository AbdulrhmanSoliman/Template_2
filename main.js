//search button and links on nav bar
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const searchInput = document.querySelector("nav .links input[type='text']");

search.onclick = () => searchInput.classList.toggle("active");
toggle.onclick = () => toggle.classList.toggle("active");

// ========= pictures silder and active bullets =========
const landing = document.querySelector(".landing");
const bullets = document.querySelectorAll(".landing .bullets span");
let allSpaceImg = document.querySelectorAll(".bg-imgs img");
let i = 1; // start from the second image (first one is already in the screen)
let htmlInterval = setInterval(() => {
  // automatically change images smoothly using setInterval
  if (i >= allSpaceImg.length) {
    i = 0; // reset i value to 0 to start again from the first image
  }
  allSpaceImg.forEach((img) => {
    // make sure all images are 0 opacity
    img.style.opacity = 0;
  });
  allSpaceImg[i].style.opacity = 1; // select the second image (i) to begain the loop

  bullets.forEach((e) => {
    // highlight the related bullet to its image
    if (i == e.dataset.pic) {
      e.classList.add("active");
    } else {
      e.classList.remove("active");
    }
  });
  i++; // move to the next img and increase the value by 1
}, 2000);
// ======================================================

// ========= change image when clicking on each bullet =========
bullets.forEach((b, index) => {
  b.addEventListener("click", () => {
    bullets.forEach((b) => {
      // make sure all bullets not having class active
      b.classList.remove("active");
    });
    clearInterval(htmlInterval); // stop the spining
    allSpaceImg.forEach((img) => {
      // make sure all images are 0 opacity
      img.style.opacity = 0;
    });
    allSpaceImg[index].style.opacity = 1; // select the image connected with its bullet
    b.classList.add("active"); // set the active class
  });
});
// ======================================================
// ========= change wallpaper in phones =========
let rightBtn = document.querySelector(".right");
let leftBtn = document.querySelector(".left");
let imageNum = 0; // start from initial value

rightBtn.onclick = function () {
  // change image after clicking right btn in mobile phones
  clearInterval(htmlInterval);
  if (imageNum < 3) {
    imageNum++;
    changeImage(imageNum);
  }
};

leftBtn.onclick = function () {
  // change image after clicking left btn in mobile phones
  clearInterval(htmlInterval);
  if (imageNum > 0) {
    imageNum--;
    changeImage(imageNum);
  }
};

function changeImage(index) {
  allSpaceImg.forEach((img) => {
    img.style.opacity = 0;
  });
  allSpaceImg[index].style.opacity = 1;
}
// ======================================================
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
        }, goal / 200);
      });
    }
    started = true;
  }
});
