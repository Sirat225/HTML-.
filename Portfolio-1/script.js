document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const backToTopButton = document.getElementById('back-to-top');
    // Get the contact form element (only present on contact.html)
    const contactForm = document.getElementById('contact-form');

    // =======================================================
    // 1. Navigation Bar Toggle for Mobile View
    // =======================================================
    menuToggle.addEventListener('click', () => {
        // Toggles the 'active' class to show/hide the menu (CSS handles the display)
        navbar.classList.toggle('active');
    });

    // Close the navigation bar when a link is clicked (on mobile)
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });

    // =======================================================
    // 2. "Back to top" button
    // =======================================================

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling effect
        });
    });

    // =======================================================
    // 3. Simple Form Validation (Client-Side)
    // This runs only if the contactForm element exists (i.e., on contact.html)
    // =======================================================
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Prevent default submission (since PHP isn't integrated yet)
            e.preventDefault(); 
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('form-message');

            // Reset previous messages
            formMessage.classList.add('hidden');
            formMessage.style.backgroundColor = '';
            formMessage.textContent = '';

            // Check for empty fields
            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Please fill out all required fields.';
                formMessage.style.backgroundColor = '#f8d7da'; // Light red for error
                formMessage.style.color = '#721c24'; // Dark red text
                formMessage.classList.remove('hidden');
                return; // Stop the 'submission'
            }

            // Basic email format check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.style.backgroundColor = '#f8d7da';
                formMessage.style.color = '#721c24';
                formMessage.classList.remove('hidden');
                return; // Stop the 'submission'
            }

            // --- If validation passes ---
            
            // TEMPORARY success message for front-end demonstration:
            formMessage.textContent = 'Form validated successfully! (Backend integration pending)';
            formMessage.style.backgroundColor = '#d4edda'; // Light green for success
            formMessage.style.color = '#155724'; // Dark green text
            formMessage.classList.remove('hidden');
            
            // Clear the form after 'submission'
            contactForm.reset();
        });
    }
});