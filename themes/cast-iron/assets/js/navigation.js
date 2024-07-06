document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#main-nav');
  let lastScrollTop = 0;

  // Handle navigation toggle on mobile
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
      navToggle.classList.toggle('active');
    });
  }

  // Handle header visibility on scroll
  window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 50) {
      // Scrolling down & not at the top
      header.classList.add('hidden');
    } else {
      // Scrolling up or at the top
      header.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, false);
});