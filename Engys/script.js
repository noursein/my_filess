// Reveal products when scrolled into view
window.addEventListener('scroll', function() {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
      const productPosition = product.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (productPosition < windowHeight - 100) {
        product.classList.add('visible');
      }
    });
  });
  
  // Scroll effects for testimonial sections
  window.addEventListener('scroll', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
      const testimonialPosition = testimonial.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (testimonialPosition < windowHeight - 100) {
        testimonial.classList.add('visible');
      }
    });
  });

  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const targetPosition = targetElement.offsetTop;
      
      window.scrollTo({
        top: targetPosition,
        behavior:'smooth'
      });
    });
  });

  // Initialize AOS for animations
// AOS.init({
//     offset: 120, 
//     duration: 1000, 
//     easing: 'ease-in-out',
//     once: true
//   });
  // Initialize AOS for animations
AOS.init({
    offset: 120,
    duration: 1500,
    easing: 'ease-in-out',
    once: true
  });

  // Initialize Swiper for product carousel
  const swiper = new Swiper('.product-carousel', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  // Initialize Masonry for blog grid
  const blogGrid = document.querySelector('.blog-grid');
  const masonry = new Masonry(blogGrid, {
    itemSelector: '.blog-post',
    columnWidth: '.grid-sizer',
    gutter: 20
  });

  // Initialize LightGallery for image galleries
  const lightGallery = document.querySelectorAll('.lightgallery');
  lightGallery.forEach(gallery => {
    lightGallery(gallery, {
      download: false,
      subHtml: {
        'prev': '<i class="fas fa-arrow-left"></i>',
        'next': '<i class="fas fa-arrow-right"></i>'
      }
    });
  });


  // Initialize Select2 for dropdowns
  const select2 = document.querySelectorAll('.select2');
  select2.forEach(select => {
    select.select2();
  });
  
  
  