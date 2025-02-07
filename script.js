document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                event.preventDefault(); // Prevent form submission
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault(); // Prevent form submission
                return;
            }

            // If all validations pass, you can submit the form.
            // For this example, we'll just show an alert.
            alert('Form submitted successfully!');
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // About Us Section Scroll Animation
    const aboutUsSection = document.getElementById('about-us');

    function handleScroll() {
        // Check if the About Us section is in the viewport
        const rect = aboutUsSection.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (isVisible && !aboutUsSection.classList.contains('visible')) {
            aboutUsSection.classList.add('visible');
            // Remove the scroll listener once the section is visible to prevent repeated triggering
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Add scroll event listener to trigger the animation
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the section is already in view on load
    handleScroll();

    // Contact Section Fade-In (Moved to here, as it's for the contact page and not necessary on index)
   // const contactSection = document.getElementById('contactForm');
   // if(contactSection){
     //   setTimeout(() => {
       //     contactSection.classList.add('visible');
        //}, 100);
    //}
});
