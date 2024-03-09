const owlOptions = {
  option1: {
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: false,
  },

  option2: {
    loop: false,
    margin: 10,
    nav: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  },

  option3: {
    loop: false,
    margin: 10,
    nav: true,
    items: 4,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 3,
      },
    },
  },
};

export default owlOptions;
