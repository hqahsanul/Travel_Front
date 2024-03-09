(function ($) {
  "use strict";

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 10) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });

  $(function () {
    $(window).on("scroll", function () {
      var scrolled = $(window).scrollTop();
      if (scrolled > 600) $(".go-top").addClass("active");
      if (scrolled < 600) $(".go-top").removeClass("active");
    });

    $(".go-top").on("click", function () {
      $("html, body").animate({ scrollTop: "0" }, 500);
    });
  });

  jQuery(".mean-menu").meanmenu({
    meanScreenWidth: "1199",
  });

  $(".others-option-for-responsive .dot-menu").on("click", function () {
    $(".others-option-for-responsive .container .container").toggleClass(
      "active"
    );
  });
  $(".others-options .search-box").on("click", function () {
    $(".search-overlay").toggleClass("search-overlay-active");
  });
  $(".search-overlay-close").on("click", function () {
    $(".search-overlay").removeClass("search-overlay-active");
  });
  $(".language-option").each(function () {
    var each = $(this);
    each
      .find(".lang-name")
      .html(each.find(".language-dropdown-menu a:nth-child(1)").text());
    var allOptions = $(".language-dropdown-menu").children("a");
    each.find(".language-dropdown-menu").on("click", "a", function () {
      allOptions.removeClass("selected");
      $(this).addClass("selected");
      $(this)
        .closest(".language-option")
        .find(".lang-name")
        .html($(this).text());
    });
  });
})(jQuery);

jQuery(window).on("load", function () {
  jQuery(".preloader").fadeOut(500);
});
