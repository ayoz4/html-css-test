document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".sidebar__burger");

  btn.onclick = function () {
    var tests = document.querySelectorAll(
      ".sidebar__burger,.sidebar,.sidebar__btn,.sidebar__logo,.sidebar__list"
    );

    var isActive = false;

    if (tests[0].classList[1]) {
      isActive = true;
    }

    for (let index = 0; index < tests.length; index++) {
      if (isActive) tests[index].classList.remove("active");
      else tests[index].classList.add("active");
    }
  };

  window.addEventListener("scroll", function () {
    var width = document.documentElement.clientWidth;

    if (width < 769) {
      var header = document.querySelector(".header__fixed");
      var headerInput = document.querySelector(".header__input");

      if (document.querySelectorAll("html")[0].scrollTop > 27 && width > 321) {
        header.style.paddingLeft = "77px";
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.width = "calc(100% - 77px)";

        headerInput.style.width = "calc(100% - 77px)";
      } else if (
        width < 321 &&
        document.querySelectorAll("html")[0].scrollTop > 27
      ) {
        header.style.paddingLeft = "68px";
        header.style.transition = "all 0.3s";

        headerInput.style.background = "none";
        headerInput.style.paddingLeft = "16px";
      } else {
        header.style.paddingLeft = "26px";
        header.style.position = "relative";
        header.style.width = "100%";

        headerInput.style.background =
          "url(header/search.svg) no-repeat scroll 16px 16px";
        headerInput.style.width = "100%";
      }
    }

    if (width >= 1440) {
      document.querySelector(".header").style.paddingLeft = "60px";
    }
  });
});
