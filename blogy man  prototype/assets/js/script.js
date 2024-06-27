'use strict';

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}




const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);





const searchBar = document.querySelector("[data-search-bar]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(searchTogglers, "click", toggleSearchBar);


  document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('[data-nav-link]');

    
    function scrollToElement(element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 50  
      });
    }

    
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 

        if (targetElement) {
          
          navLinks.forEach(link => {
            link.classList.remove('active');
          });

          
          this.classList.add('active');

          
          scrollToElement(targetElement);
        }
      });
    });
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    const searchToggler = document.querySelector('[data-search-toggler]');
    const navToggler = document.querySelector('[data-nav-toggler]');
    const body = document.body;

    
    searchToggler.addEventListener('click', function() {
      
    });

    
    navToggler.addEventListener('click', function() {
      
      body.classList.toggle('nav-open');
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const cardTags = document.querySelectorAll('.card-tag');

    
    cardTags.forEach(tag => {
      tag.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        console.log(`Clicked tag: ${this.textContent}`);
        
        
      });
    });
  });



