// GIFT Website Main JavaScript

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const navMenu = document.getElementById('nav-menu');

  if (mobileMenuButton && navMenu) {
    mobileMenuButton.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      const expanded = navMenu.classList.contains('active');
      mobileMenuButton.setAttribute('aria-expanded', expanded);
    });
  }

  // Lazy loading images
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach(img => img.classList.add('loaded'));
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Form handling with Web3Forms (free, no backend required)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      try {
        // Using FormSubmit.co (free form backend service)
        const response = await fetch(contactForm.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          showMessage('Thank you! Your message has been sent successfully.', 'success');
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        showMessage('Sorry, there was an error sending your message. Please email us directly at timothy.maurer@institutefortransformation.org', 'error');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }

  // Newsletter signup
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      const submitButton = newsletterForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Subscribing...';

      const formData = new FormData(newsletterForm);
      const data = Object.fromEntries(formData);

      try {
        const response = await fetch(newsletterForm.action, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          showMessage('Thank you for subscribing to our newsletter!', 'success');
          newsletterForm.reset();
        } else {
          throw new Error('Newsletter signup failed');
        }
      } catch (error) {
        showMessage('Sorry, there was an error. Please try again later.', 'error');
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }

  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
});

// Show message function
function showMessage(message, type) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
    type === 'success' ? 'bg-green-500' : 'bg-red-500'
  } text-white`;
  messageDiv.textContent = message;
  messageDiv.setAttribute('role', 'alert');

  document.body.appendChild(messageDiv);

  setTimeout(() => {
    messageDiv.style.opacity = '0';
    messageDiv.style.transition = 'opacity 0.5s ease';
    setTimeout(() => messageDiv.remove(), 500);
  }, 5000);
}

// Stats counter animation
function animateStats() {
  const stats = document.querySelectorAll('.stat-number');

  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = parseInt(target.getAttribute('data-value'));
        const duration = 2000; // 2 seconds
        const increment = finalValue / (duration / 16); // 60fps
        let currentValue = 0;

        const updateCounter = () => {
          currentValue += increment;
          if (currentValue < finalValue) {
            target.textContent = Math.floor(currentValue).toLocaleString();
            requestAnimationFrame(updateCounter);
          } else {
            target.textContent = finalValue.toLocaleString() + (target.getAttribute('data-suffix') || '');
          }
        };

        updateCounter();
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  stats.forEach(stat => observer.observe(stat));
}

// Run stats animation when stats exist on page
if (document.querySelector('.stat-number')) {
  animateStats();
}

// Accessibility: Add keyboard navigation for cards
document.querySelectorAll('.card').forEach(card => {
  const link = card.querySelector('a');
  if (link) {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'article');
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        link.click();
      }
    });
  }
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
