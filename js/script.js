var bannerswiper = new Swiper(".bannerSwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var productswiper = new Swiper(".slider__productSwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var products__saleSwiper = new Swiper(".products__saleSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// back to top
//scroll window sticky and button back to top
window.onscroll = function () { scrollFunctions() };

let mybutton = document.querySelector(".backtotop");

function scrollFunctions() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.remove('show');
  } else {
    mybutton.classList.add('show');
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.querySelector("html, body").animate({ scrollTop: 0 }, 500);
};
// hiden show contact form
let btnContact = document.querySelector('.footer__icon-contact');
let contactForm = document.querySelector('.footer__contact');
let closeForm = document.querySelector('.ft-close');

function hideShowFormCt() {
  btnContact.addEventListener('click', function () {
    contactForm.classList.add('show');
  });

  contactForm.addEventListener('click', function (event) {
    if (event.target.classList.contains('.ft-close')) {
      contactForm.classList.remove('show');
    }
    console.log('this is form');
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.footer__contact') && !event.target.closest('.footer__icon-contact')) {
      contactForm.classList.remove('show');
    }
  });
}

// show menu
let bgHiden = document.querySelector('.bg-hiden');
let btnMenu = document.querySelector('.btn-menu');
let menuListMb = document.querySelector('.menu-listMb');
let btncloseMenu = document.querySelector('.btn-closeMenu');

btnMenu.addEventListener('click', () => {
  menuListMb.classList.add('show');
  bgHiden.style.display = 'block';
});

btncloseMenu.addEventListener('click', () => {
  menuListMb.classList.remove('show');
  bgHiden.style.display = 'none';
});

bgHiden.addEventListener('click', () => {
  menuListMb.classList.remove('show');
  bgHiden.style.display = 'none';
});

// animation bottom to top
function bottomToTop() {
  var bottomToTops = document.querySelectorAll(".bottomToTop");

  for (var i = 0; i < bottomToTops.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = bottomToTops[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      bottomToTops[i].classList.add("active");
    } else {
      bottomToTops[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", bottomToTop);

// animation right to left
function rightToLeft() {
  var rightToLefts = document.querySelectorAll(".rightToLeft");

  for (var i = 0; i < rightToLefts.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = rightToLefts[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      rightToLefts[i].classList.add("active");
    } else {
      rightToLefts[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", rightToLeft);

// animation left to right
function leftToRight() {
  var leftToRights = document.querySelectorAll(".leftToRight");

  for (var i = 0; i < leftToRights.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = leftToRights[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      leftToRights[i].classList.add("active");
    } else {
      leftToRights[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", leftToRight);