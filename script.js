// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
      
      // Add mobile menu styles dynamically
      if (navLinks.classList.contains('show')) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        navLinks.style.zIndex = '100';
        
        // Style the links in mobile menu
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
          link.style.margin = '0.5rem 0';
          link.style.padding = '0.5rem';
        });
      } else {
        navLinks.style.display = '';
        // Reset other styles when menu is closed
      }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = navLinks.contains(event.target);
      const isClickOnToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnToggle && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        navLinks.style.display = '';
      }
    });
    
    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768 && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        navLinks.style.display = '';
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        if (navLinks.classList.contains('show')) {
          navLinks.classList.remove('show');
          navLinks.style.display = '';
        }
        
        // Scroll to the target element
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add animation on scroll
  const animateOnScroll = function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial styles for animation
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run animation on page load and scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
});