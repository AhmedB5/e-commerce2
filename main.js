document.querySelectorAll(".main li").forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.add("active");

    document.querySelectorAll(".main li").forEach(function (otherItem) {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
  });
});

document.querySelectorAll(".best div").forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    let explore = this.querySelector(".explore");
    explore.style.opacity = "1";
    explore.style.visibility = "visible";
  });
  ele.addEventListener("mouseleave", function () {
    let explore = this.querySelector(".explore");
    explore.style.opacity = "0";
    explore.style.visibility = "hidden";
  });
});

document.querySelectorAll(".prod img").forEach(function (img) {
  img.addEventListener("mouseenter", function () {
    let opretion = this.parentNode.querySelector(".opretion");
    opretion.style.visibility = "visible";
    opretion.style.opacity = "1";
  });
  img.addEventListener("mouseleave", function () {
    let opretion = this.parentNode.querySelector(".opretion");
    opretion.style.visibility = "hidden";
    opretion.style.opacity = "0";
  });
});

document.querySelectorAll(".prod .opretion").forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    let opretion = this;
    opretion.style.visibility = "visible";
    opretion.style.opacity = "1";
  });

  ele.addEventListener("mouseleave", function () {
    let opretion = this;
    opretion.style.visibility = "hidden";
    opretion.style.opacity = "0";
  });
});

let MySelcetion = [];
document.querySelectorAll(".opretion p").forEach(function (i) {
  i.addEventListener("click", function () {
    if (!i.classList.contains("active")) {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  });
});
document.querySelectorAll(".opretion .addCart").forEach(function (theCart) {
  theCart.addEventListener("click", function () {
    let name =
      theCart.parentNode.parentNode.querySelector(".information h4").innerHTML;
    if (!MySelcetion.includes(name)) {
      MySelcetion.push(name);
      console.log(MySelcetion);
    } else {
      let index = MySelcetion.indexOf(name);
      if (index !== -1) {
        MySelcetion.splice(index, 1);
        console.log(MySelcetion);
      }
    }
    let count = document.querySelector(".icons .itemCount");
    count.innerHTML = MySelcetion.length;
    count.style.paddingLeft = "5px";
    count.style.paddingRight = "4px";
  });
});

let MyFavoriteProducts = [];

document.querySelectorAll(".opretion .addHeart").forEach(function (thebest) {
  thebest.addEventListener("click", function () {
    let name =
      thebest.parentNode.parentNode.querySelector(".information h4").innerHTML;
    if (!MyFavoriteProducts.includes(name)) {
      MyFavoriteProducts.push(name);
      console.log(MyFavoriteProducts);
    } else {
      let index = MyFavoriteProducts.indexOf(name);
      if (index !== -1) {
        MyFavoriteProducts.splice(index, 1);
        console.log(MyFavoriteProducts);
      }
    }
    let count = document.querySelector(".icons .favoritesCount");
    count.innerHTML = MyFavoriteProducts.length;
    count.style.paddingLeft = "5px";
    count.style.paddingRight = "4px";
  });
});

let inputIcon = document.querySelector("#inputIcon");
inputIcon.addEventListener("click", function () {
  if (!inputIcon.classList.contains("select")) {
    inputIcon.classList.add("select");
    let inputplace = document.querySelector(".input");
    inputplace.style.display = "block";
  } else {
    let inputplace = document.querySelector(".input");
    inputplace.style.display = "none";
    inputIcon.classList.remove("select");
  }
});
let arrow = document.querySelector(".arrow");
window.addEventListener("scroll", function () {
  if (window.scrollY > 450) {
    arrow.style.display = "flex";
  } else {
    arrow.style.display = "none";
  }
});
arrow.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
let bars = document.querySelector(".bars li i");
console.log(bars);
bars.addEventListener("click", function () {
  if (bars.className === "fa-solid fa-bars-staggered") {
    let allSmall = document.querySelector(".allHead");
    allSmall.style.display = "block";
    bars.className = "fa-solid fa-x";
  } else if (bars.className == "fa-solid fa-x") {
    let allSmall = document.querySelector(".allHead");

    allSmall.style.display = "none";
    bars.className = "fa-solid fa-bars-staggered";
  }
});
