document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Animate timeline items on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    });
  
    // Observe all cards and sections
    document.querySelectorAll('.timeline-item, .product-card, .impact-card').forEach(item => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'all 0.5s ease-out';
      observer.observe(item);
    });
  });