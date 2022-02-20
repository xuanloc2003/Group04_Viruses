$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar-bottom").addClass("sticky");
    } else {
      $(".navbar-bottom").removeClass("sticky");
    }
    if (this.scrollY > 30) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // toggel menu
  $(".menu-btn").click(function () {
    $(".navbar-bottom .nav-menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});
$(".customer-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><img src="./img/arrow-left.svg"/></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><img src="./img/arrow-right.svg"/></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});

// Login form
function checkEmpty(value) {
  if (value.trim() == "") {
    return true;
  }
  return false;
}
var btn = document.querySelector("#btn");
function clicklogin() {
  var login = document.getElementById("login");
  var password = document.getElementById("password");
  if (checkEmpty(login.value)) {
    alert("The Login name cannot left blank");
    login.style.outline = "2px solid red";
    login.focus();
    return false;
  } else if (checkEmpty(password.value)) {
    alert("The Password cannot left blank");
    password.style.outline = "2px solid red";
    password.focus();
    return false;
  }
  if (login.value != "aptech" || password.value != "123") {
    alert("User or password is invalid");
    return false;
  } else {
    alert("Welcome VertexSystems user, Login successfully");
  }
}
btn.addEventListener("click", clicklogin);
// Sign Up form
var checkValidation = function () {
  valid = true;
  valid =
    kiemTraRong("#Username", "#error_username") &
    kiemTraRong("#password-signup", "#error_password");
  valid &= kiemTraDoDai("#password-signup", "#error_password_min_max_length");
  if (valid == false) {
    return false;
  }
  alert("Congratulation! You have successfully registered!");
};
var kiemTraRong = function (selectorValue, selectorError) {
  var inputText = document.querySelector(selectorValue);
  var messErr = document.querySelector(selectorError);
  if (inputText.value.trim() === "") {
    messErr.innerHTML = inputText.name + " khong duoc bo trong";
    messErr.style.display = "block";
    return false;
  } else {
    messErr.innerHTML = "";
    messErr.style.display = "none";
    return true;
  }
};
var kiemTraDoDai = function (selectorValue, selectorError) {
  var inputText = document.querySelector(selectorValue);
  var messErr = document.querySelector(selectorError);
  console.log(inputText.minLength);
  if (
    inputText.value.length >= inputText.minLength &&
    inputText.value.length <= inputText.maxLength
  ) {
    messErr.innerHTML = "";
    messErr.style.display = "none";
    return true;
  } else {
    messErr.innerHTML =
      inputText.name +
      " từ " +
      inputText.minLength +
      " đến " +
      inputText.maxLength +
      " ký tự!";
    messErr.style.display = "block";
    return false;
  }
};
document.getElementById("Username").onblur = checkValidation;
document.getElementById("password-signup").onblur = checkValidation;
document.getElementById("btnDangKy").onclick = checkValidation;
