// Contact Form JavaScript - Pure Vanilla JS

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    
    // Form validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        // Basic phone validation - allows numbers, spaces, dashes, parentheses
        const re = /^[\d\s\-\(\)\+]+$/;
        return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }

    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        formGroup.classList.add('error');
        
        let errorMsg = formGroup.querySelector('.error-message');
        if (!errorMsg) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            formGroup.appendChild(errorMsg);
        }
        errorMsg.textContent = message;
    }

    function clearError(input) {
        const formGroup = input.closest('.form-group');
        formGroup.classList.remove('error');
        const errorMsg = formGroup.querySelector('.error-message');
        if (errorMsg) {
            errorMsg.textContent = '';
        }
    }

    function showSuccessMessage() {
        let successMsg = document.querySelector('.success-message');
        if (!successMsg) {
            successMsg = document.createElement('div');
            successMsg.className = 'success-message';
            form.parentNode.insertBefore(successMsg, form);
        }
        successMsg.textContent = 'Thank you! Your message has been sent successfully.';
        successMsg.classList.add('show');
        
        setTimeout(() => {
            successMsg.classList.remove('show');
        }, 5000);
    }

    // Real-time validation on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                clearError(this);
            }
        });

        input.addEventListener('blur', function() {
            if (this.value.trim() !== '') {
                validateField(this);
            }
        });
    });

    function validateField(input) {
        const value = input.value.trim();
        
        if (input.type === 'email') {
            if (!validateEmail(value)) {
                showError(input, 'Please enter a valid email address');
                return false;
            }
        } else if (input.type === 'tel') {
            if (value && !validatePhone(value)) {
                showError(input, 'Please enter a valid phone number');
                return false;
            }
        } else if (input.required && value === '') {
            showError(input, 'This field is required');
            return false;
        }
        
        clearError(input);
        return true;
    }

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear all previous errors
        inputs.forEach(input => clearError(input));
        
        let isValid = true;
        
        // Validate all required fields
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');
        
        if (fullName.value.trim() === '') {
            showError(fullName, 'Please enter your full name');
            isValid = false;
        }
        
        if (email.value.trim() === '') {
            showError(email, 'Please enter your email');
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        if (phone.value.trim() && !validatePhone(phone.value.trim())) {
            showError(phone, 'Please enter a valid phone number');
            isValid = false;
        }
        
        if (!isValid) {
            // Scroll to first error
            const firstError = form.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.textContent = 'Sending';
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Get form data
            const formData = {
                fullName: fullName.value.trim(),
                email: email.value.trim(),
                phone: phone.value.trim(),
                countryCode: document.getElementById('countryCode').value,
                message: message.value.trim()
            };
            
            console.log('Form submitted with data:', formData);
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            form.reset();
            
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.textContent = 'Send message';
            
            // Scroll to top to show success message
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add animation on scroll for form elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe form groups
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(group);
    });

    // Phone input formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        // Format as (XXX) XXX-XXXX for US numbers
        if (value.length > 0) {
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else if (value.length <= 10) {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
            } else {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }
        
        e.target.value = value;
    });

    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Page load animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    console.log('Contact page loaded successfully!');
    console.log('Form validation and submission handlers initialized');
});
