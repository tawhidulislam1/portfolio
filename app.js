particlesJS("home", {
  particles: {
    number: { value: 80, density: { enable: !0, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 0 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: !1,
      anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
    },
    size: {
      value: 5,
      random: !0,
      anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
    },
    line_linked: {
      enable: !0,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: !0,
      speed: 6,
      direction: "none",
      random: !1,
      straight: !1,
      out_mode: "out",
      attract: { enable: !1, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: !0, mode: "repulse" },
      onclick: { enable: !0, mode: "push" },
      resize: !0,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 0, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: !0,
  config_demo: { hide_card: !1 },
}),
  $(document).ready(function () {
    $(window).scroll(function () {
      this.scrollY > 20
        ? $(".navbar").addClass("sticky")
        : $(".navbar").removeClass("sticky"),
        this.scrollY > 30
          ? $(".scroll-up-btn").addClass("show")
          : $(".scroll-up-btn").removeClass("show"),
        mixitup(".container");
    }),
      $(".scroll-up-btn").click(function () {
        $("html").animate({ scrollTop: 0 }),
          $("html").css("scrollBehavior", "auto");
      }),
      $(".navbar .menu li a").click(function () {
        $("html").css("scrollBehavior", "smooth");
      }),
      $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active"),
          $(".menu-btn i").toggleClass("active");
      }),
      new Typed(".typing", {
        strings: [
          "Web Developer",
          "Frontend Developer",
          "Full Stack Developer",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: !0,
        delay: 500,
      }),
      new Typed(".typing-2", {
        strings: [
          "Web Developer",
          "Frontend Developer",
          "Full Stack Developer",
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: !0,
      }),
      $(".carousel").owlCarousel({
        margin: 20,
        loop: !0,
        autoplayTimeOut: 2e3,
        autoplayHoverPause: !0,
        responsive: {
          0: { items: 1, nav: !1 },
          600: { items: 2, nav: !1 },
          1000: { items: 3, nav: !1 },
        },
      }),
      $("a").on("click", function (e) {
        if ("" !== this.hash) {
          e.preventdefault();
          var t = this.hash;
          $("html , body").animate(
            { scrollTop: $(t).offset().top },
            800,
            function () {
              window.location.hash = t;
            }
          );
        }
      });
  });
const inputs = document.querySelectorAll(".input");
function focusFunc() {
  this.parentNode.classList.add("focus");
}
function blurFunc() {
  let e = this.parentNode;
  "" == this.value && e.classList.remove("focus");
}
inputs.forEach((e) => {
  e.addEventListener("focus", focusFunc), e.addEventListener("blur", blurFunc);
});
var i,
  coll = document.getElementsByClassName("collapsible");
$(document).ready(function () {
  $(".acc h3").click(function () {
    $(this).next(".content").slideToggle(),
      $(this).parent().toggleClass("active"),
      $(this).parent().siblings().children(".content").slideUp(),
      $(this).parent().siblings().removeClass("active");
  });
}),
  new WOW().init(),
  $("svg.radial-progress").each(function (e, t) {
    $(this).find($("circle.complete")).removeAttr("style");
  }),
  $(window)
    .scroll(function () {
      $("svg.radial-progress").each(function (e, t) {
        $(window).scrollTop() >
          $(this).offset().top - 0.75 * $(window).height() &&
          $(window).scrollTop() <
            $(this).offset().top +
              $(this).height() -
              0.25 * $(window).height() &&
          ((percent = $(t).data("percentage")),
          (radius = $(this).find($("circle.complete")).attr("r")),
          (circumference = 2 * Math.PI * radius),
          (strokeDashOffset = circumference - (percent * circumference) / 100),
          $(this)
            .find($("circle.complete"))
            .animate({ "stroke-dashoffset": strokeDashOffset }, 1250));
      });
    })
    .trigger("scroll");


