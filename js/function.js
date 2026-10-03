(function ($) {
  "use strict";

  var $window = $(window);
  var $body = $("body");

  /* Preloader Effect */
  $window.on("load", function () {
    $(".preloader").fadeOut(600);
  });

  /* Sticky Header */
  if ($(".active-sticky-header").length) {
    $window.on("resize", function () {
      setHeaderHeight();
    });

    function setHeaderHeight() {
      $("header.active-sticky-header").css(
        "height",
        $("header.active-sticky-header .header-sticky").outerHeight()
      );
    }

    $window.on("scroll", function () {
      var fromTop = $(window).scrollTop();
      setHeaderHeight();
      var headerHeight = $(
        "header.active-sticky-header .header-sticky"
      ).outerHeight();
      $("header.active-sticky-header .header-sticky").toggleClass(
        "hide",
        fromTop > headerHeight + 100
      );
      $("header.active-sticky-header .header-sticky").toggleClass(
        "active",
        fromTop > 600
      );
    });
  }

  /* Slick Menu JS */
  $("#menu").slicknav({
    label: "",
    prependTo: ".responsive-menu",
  });

  if ($("a[href='#top']").length) {
    $(document).on("click", "a[href='#top']", function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  }

  /* testimonial Slider JS */
  if ($(".testimonial-slider").length) {
    const testimonial_slider = new Swiper(".testimonial-slider .swiper", {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 20,
      rewind: true,
      autoplay: {
        delay: 5000,
      },

        breakpoints: {
          576: {
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
  }

  /* Hero Slider Metal JS */
  if ($(".hero-metal-swiper").length) {
    const hero_metal_swiper = new Swiper(".hero-metal-swiper", {
      slidesPerView: 1,
      speed: 1000,
      rewind: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".hero-metal-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".hero-metal-next",
        prevEl: ".hero-metal-prev",
      },
    });
  }

  /* Results Slider Metal JS */
  if ($(".results-slider-metal").length) {
    const results_slider_metal = new Swiper(
      ".results-slider-metal .swiper",
      {
        slidesPerView: 1,
        speed: 500,
        spaceBetween: 16,
        rewind: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".results-metal-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".results-metal-next",
          prevEl: ".results-metal-prev",
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        },
      }
    );
  }

  /* Results Showcase Tabs */
  if ($(".results-showcase-tabs").length) {
    const showcaseTabs = $(".results-showcase-tab");
    const showcasePanels = $(".results-showcase-panel");
    let showcaseIndex = showcaseTabs.index(
      showcaseTabs.filter(".is-active").first()
    );
    if (showcaseIndex < 0) showcaseIndex = 0;

    showcaseTabs.on("click", function () {
      const target = $(this).data("target");

      if (!target || !$(target).length) return;

      showcaseTabs.removeClass("is-active");
      $(this).addClass("is-active");

      showcasePanels.removeClass("is-active");
      $(target).addClass("is-active");

      showcaseIndex = showcaseTabs.index(this);
    });

    setInterval(function () {
      showcaseIndex = (showcaseIndex + 1) % showcaseTabs.length;
      showcaseTabs.eq(showcaseIndex).trigger("click");
    }, 15000);
  }

  /* Results Showcase Carousel */
  if ($(".results-carousel").length) {
    $(".results-carousel").each(function () {
      new Swiper(this, {
        slidesPerView: 2,
        spaceBetween: 12,
        loop: false,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        breakpoints: {
          360: {
            slidesPerView: 2.2,
            spaceBetween: 14,
          },
          576: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        },
      });
    });
  }

  /* Gallery Tabs */
  if ($(".gallery-tabs").length) {
    const galleryTabs = $(".gallery-tab");
    const galleryPanels = $(".gallery-panel");

    galleryTabs.on("click", function () {
      const target = $(this).data("target");
      if (!target || !$(target).length) return;

      galleryTabs.removeClass("is-active");
      $(this).addClass("is-active");

      galleryPanels.removeClass("is-active");
      $(target).addClass("is-active");
    });
  }

  /* testimonial Slider Stone JS */
  if ($(".testimonial-slider-stone").length) {
    const testimonial_slider_stone = new Swiper(
      ".testimonial-slider-stone .swiper",
      {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 20,
        rewind: true,
        autoplay: {
          delay: 5000,
        },
        breakpoints: {
          576: {
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1500: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      }
    );
  }

  /* Testimonial Company Slider Stone JS */
  if ($(".testimonial-company-slider-stone").length) {
    const testimonial_company_slider_stone = new Swiper(
      ".testimonial-company-slider-stone .swiper",
      {
        slidesPerView: 1,
        speed: 2000,
        spaceBetween: 16,
        rewind: true,
        autoplay: {
          delay: 5000,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        },
      }
    );
  }

  /* testimonial Slider metal JS */
  if ($(".testimonial-slider-metal").length) {
    const testimonial_slider_metal = new Swiper(
      ".testimonial-slider-metal .swiper",
      {
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 20,
        rewind: true,
        autoplay: {
          delay: 5000,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      }
    );
  }

  /* Testimonial Company Slider Metal JS */
  if ($(".testimonial-company-slider-metal").length) {
    const testimonial_company_slider_metal = new Swiper(
      ".testimonial-company-slider-metal .swiper",
      {
        slidesPerView: 1,
        speed: 2000,
        spaceBetween: 16,
        rewind: true,
        autoplay: {
          delay: 5000,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        },
      }
    );
  }

  /* Skill Bar */
  if ($(".skills-progress-bar").length) {
    $(".skills-progress-bar").waypoint(
      function () {
        $(".skillbar").each(function () {
          $(this)
            .find(".count-bar")
            .animate(
              {
                width: $(this).attr("data-percent"),
              },
              2000
            );
        });
      },
      {
        offset: "70%",
      }
    );
  }

  /* Youtube Background Video JS */
  if ($("#herovideo").length) {
    var myPlayer = $("#herovideo").YTPlayer();
  }

  /* Init Counter */
  if ($(".counter").length) {
    $(".counter").counterUp({ delay: 6, time: 3000 });
  }

  /* Image Reveal Animation */
  if ($(".reveal").length) {
    gsap.registerPlugin(ScrollTrigger);
    let revealContainers = document.querySelectorAll(".reveal");
    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        },
      });
      tl.set(container, {
        autoAlpha: 1,
      });
      tl.from(container, 1, {
        xPercent: -100,
        ease: Power2.out,
      });
      tl.from(image, 1, {
        xPercent: 100,
        scale: 1,
        delay: -1,
        ease: Power2.out,
      });
    });
  }

  /* Text Effect Animation */
  function initHeadingAnimation() {
    if ($(".text-effect").length) {
      var textheading = $(".text-effect");

      if (textheading.length === 0) return;
      gsap.registerPlugin(SplitText);
      textheading.each(function (index, el) {
        el.split = new SplitText(el, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });

        if ($(el).hasClass("text-effect")) {
          gsap.set(el.split.chars, {
            opacity: 0.3,
            x: "-7",
          });
        }
        el.anim = gsap.to(el.split.chars, {
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            end: "top 60%",
            markers: false,
            scrub: 1,
          },

          x: "0",
          y: "0",
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
        });
      });
    }

    if ($(".text-anime-style-1").length) {
      let staggerAmount = 0.05,
        translateXValue = 0,
        delayValue = 0.5,
        animatedTextElements = document.querySelectorAll(".text-anime-style-1");

      animatedTextElements.forEach((element) => {
        let animationSplitText = new SplitText(element, {
          type: "chars, words",
        });
        gsap.from(animationSplitText.words, {
          duration: 1,
          delay: delayValue,
          x: 20,
          autoAlpha: 0,
          stagger: staggerAmount,
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
    }

    if ($(".text-anime-style-2").length) {
      let staggerAmount = 0.03,
        translateXValue = 20,
        delayValue = 0.1,
        easeType = "power2.out",
        animatedTextElements = document.querySelectorAll(".text-anime-style-2");

      animatedTextElements.forEach((element) => {
        let animationSplitText = new SplitText(element, {
          type: "chars, words",
        });
        gsap.from(animationSplitText.chars, {
          duration: 1,
          delay: delayValue,
          x: translateXValue,
          autoAlpha: 0,
          stagger: staggerAmount,
          ease: easeType,
          scrollTrigger: { trigger: element, start: "top 85%" },
        });
      });
    }

    if ($(".text-anime-style-3").length) {
      let animatedTextElements = document.querySelectorAll(
        ".text-anime-style-3"
      );

      animatedTextElements.forEach((element) => {
        //Reset if needed
        if (element.animation) {
          element.animation.progress(1).kill();
          element.split.revert();
        }

        element.split = new SplitText(element, {
          type: "lines,words,chars",
          linesClass: "split-line",
        });
        gsap.set(element, { perspective: 400 });

        gsap.set(element.split.chars, {
          opacity: 0,
          x: "50",
        });

        element.animation = gsap.to(element.split.chars, {
          scrollTrigger: { trigger: element, start: "top 90%" },
          x: "0",
          y: "0",
          rotateX: "0",
          opacity: 1,
          duration: 1,
          ease: Back.easeOut,
          stagger: 0.02,
        });
      });
    }
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      initHeadingAnimation();
    });
  } else {
    window.addEventListener("load", initHeadingAnimation);
  }

  /* Parallaxie js */
  var $parallaxie = $(".parallaxie");
  if ($parallaxie.length && $window.width() > 1024) {
    if ($window.width() > 768) {
      $parallaxie.parallaxie({
        speed: 0.55,
        offset: 0,
      });
    }
  }

  /* Zoom Gallery screenshot */
  $(".gallery-items").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom",
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find("img");
      },
    },
  });

  /* Contact form validation */
  var $contactform = $("#contactForm");
  $contactform.validator({ focus: false }).on("submit", function (event) {
    if (!event.isDefaultPrevented()) {
      event.preventDefault();
      submitForm();
    }
  });

  function submitForm() {
    /* Ajax call to submit form */
    $.ajax({
      type: "POST",
      url: "form-process.php",
      data: $contactform.serialize(),
      success: function (text) {
        if (text === "success") {
          formSuccess();
        } else {
          submitMSG(false, text);
        }
      },
    });
  }

  function formSuccess() {
    $contactform[0].reset();
    submitMSG(true, "Contact form submitted successfully!");
  }

  function submitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h4 text-success";
    } else {
      var msgClasses = "h4 text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
  }
  /* Contact form validation end */

  /* Appointment form validation */
  var $appointmentForm = $("#appointmentForm");
  $appointmentForm.validator({ focus: false }).on("submit", function (event) {
    if (!event.isDefaultPrevented()) {
      event.preventDefault();
      submitappointmentForm();
    }
  });

  function submitappointmentForm() {
    /* Ajax call to submit form */
    $.ajax({
      type: "POST",
      url: "form-appointment.php",
      data: $appointmentForm.serialize(),
      success: function (text) {
        if (text === "success") {
          appointmentformSuccess();
        } else {
          appointmentsubmitMSG(false, text);
        }
      },
    });
  }

  function appointmentformSuccess() {
    $appointmentForm[0].reset();
    appointmentsubmitMSG(true, "Message Sent Successfully!");
  }

  function appointmentsubmitMSG(valid, msg) {
    if (valid) {
      var msgClasses = "h3 text-success";
    } else {
      var msgClasses = "h3 text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
  }
  /* Appointment form validation end */

  /* Smooth scroll for in-page anchor links */
  $('a[href^="#"]').on("click", function (e) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      e.preventDefault();
      $("html, body").stop().animate(
        { scrollTop: target.offset().top - 80 },
        600
      );
    }
  });

  /* Animated Wow Js */
  new WOW().init();

  /* Popup Video */
  if ($(".popup-video").length) {
    $(".popup-video").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true,
    });
  }

  /* Contact Info List Active Start */
  if ($(".contact-info-list").length) {
    var element = $(".contact-info-list");
    var items = element.find(".contact-info-item");
    if (items.length) {
      items.on({
        mouseenter: function () {
          if ($(this).hasClass("active")) return;

          items.removeClass("active");
          $(this).addClass("active");
        },
        mouseleave: function () {
          //stuff to do on mouse leave
        },
      });
    }
  }
  /* Contact Info List Active End */
})(jQuery);
