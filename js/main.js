// ========================================
// DOM Elements
// ========================================
const header = document.getElementById('header');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('backToTop');
const categoryBtns = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.product-card');
const quoteForm = document.getElementById('quoteForm');
const formMessage = document.getElementById('formMessage');
const fileUpload = document.getElementById('fileUpload');
const fileList = document.getElementById('fileList');

// ========================================
// Header Scroll Effect
// ========================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        backToTopBtn.classList.add('visible');
    } else {
        header.classList.remove('scrolled');
        backToTopBtn.classList.remove('visible');
    }
});

// ========================================
// Mobile Menu Toggle
// ========================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Back to Top Button
// ========================================
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Animated Counter for Statistics
// ========================================
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateCounters() {
    if (hasAnimated) return;

    const heroSection = document.querySelector('.hero');
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    if (heroBottom < window.innerHeight) {
        hasAnimated = true;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60 FPS
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target.toLocaleString();
                }
            };

            updateCounter();
        });
    }
}

window.addEventListener('scroll', animateCounters);
window.addEventListener('load', animateCounters);

// ========================================
// Product Category Filter
// ========================================
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        // Filter products
        productCards.forEach(card => {
            const productCategory = card.getAttribute('data-category');
            
            if (category === 'all' || productCategory === category) {
                card.classList.remove('hidden');
                // Animate in
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    card.style.transition = 'all 0.3s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ========================================
// Form Validation & Submission
// ========================================
if (quoteForm) {
    quoteForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(quoteForm);
        const data = Object.fromEntries(formData.entries());

        // Basic validation
        if (!data.fullName || !data.phone || !data.productType || !data.quantity) {
            showMessage('Vui lòng điền đầy đủ các trường bắt buộc!', 'error');
            return;
        }

        // Phone validation
        const phoneRegex = /^[0-9]{10,11}$/;
        if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
            showMessage('Số điện thoại không hợp lệ!', 'error');
            return;
        }

        // Email validation (if provided)
        if (data.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showMessage('Email không hợp lệ!', 'error');
                return;
            }
        }

        // Show loading state
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success
            showMessage('Yêu cầu báo giá đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.', 'success');
            quoteForm.reset();
            if (fileList) fileList.innerHTML = '';
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

            // Log data to console (for development)
            console.log('Form Data:', data);

            // In production, send to server:
            /*
            try {
                const response = await fetch('/api/submit-quote', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    showMessage('Yêu cầu báo giá đã được gửi thành công!', 'success');
                    quoteForm.reset();
                } else {
                    throw new Error('Server error');
                }
            } catch (error) {
                showMessage('Có lỗi xảy ra. Vui lòng thử lại sau!', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
            */
        }, 1500);
    });
}

function showMessage(message, type) {
    if (!formMessage) return;
    
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Auto hide after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);

    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ========================================
// File Upload Handler
// ========================================
if (fileUpload && fileList) {
    fileUpload.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        fileList.innerHTML = '';

        if (files.length === 0) return;

        files.forEach((file, index) => {
            const fileItem = document.createElement('div');
            fileItem.style.cssText = `
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.75rem;
                background: var(--white);
                border: 1px solid var(--gray);
                border-radius: var(--radius-md);
                margin-bottom: 0.5rem;
            `;

            const fileInfo = document.createElement('div');
            fileInfo.style.cssText = 'flex: 1;';
            
            const fileName = document.createElement('strong');
            fileName.textContent = file.name;
            fileName.style.cssText = 'display: block; color: var(--primary-blue);';
            
            const fileSize = document.createElement('small');
            fileSize.textContent = formatFileSize(file.size);
            fileSize.style.cssText = 'color: var(--text-light);';

            fileInfo.appendChild(fileName);
            fileInfo.appendChild(fileSize);

            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.innerHTML = '<i class="fas fa-times"></i>';
            removeBtn.style.cssText = `
                background: #ff4444;
                color: white;
                border: none;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.3s ease;
            `;
            removeBtn.addEventListener('click', () => {
                fileItem.remove();
                // Remove file from input (tricky with file inputs)
                const dt = new DataTransfer();
                const currentFiles = Array.from(fileUpload.files);
                currentFiles.forEach((f, i) => {
                    if (i !== index) dt.items.add(f);
                });
                fileUpload.files = dt.files;
            });

            fileItem.appendChild(fileInfo);
            fileItem.appendChild(removeBtn);
            fileList.appendChild(fileItem);
        });
    });
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// ========================================
// Intersection Observer for Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInElements = document.querySelectorAll('.feature-card, .product-card, .contact-card');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                entry.target.style.transition = 'all 0.6s ease';
                
                requestAnimationFrame(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                });
            }, index * 100);
            
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(el => {
    fadeInObserver.observe(el);
});

// ========================================
// Lazy Loading Images
// ========================================
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// ========================================
// Real-time Form Input Validation
// ========================================
const formInputs = document.querySelectorAll('#quoteForm input, #quoteForm select, #quoteForm textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateInput(input);
    });

    input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) {
            validateInput(input);
        }
    });
});

function validateInput(input) {
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Required field validation
    if (input.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Trường này là bắt buộc';
    }

    // Phone validation
    if (input.type === 'tel' && value) {
        const phoneRegex = /^[0-9]{10,11}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) {
            isValid = false;
            errorMessage = 'Số điện thoại không hợp lệ (10-11 chữ số)';
        }
    }

    // Email validation
    if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Email không hợp lệ';
        }
    }

    // Update input state
    if (isValid) {
        input.classList.remove('invalid');
        input.style.borderColor = 'var(--primary-blue)';
        removeErrorMessage(input);
    } else {
        input.classList.add('invalid');
        input.style.borderColor = '#ff4444';
        showErrorMessage(input, errorMessage);
    }
}

function showErrorMessage(input, message) {
    removeErrorMessage(input);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'input-error';
    errorDiv.style.cssText = `
        color: #ff4444;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    `;
    errorDiv.textContent = message;
    
    input.parentElement.appendChild(errorDiv);
}

function removeErrorMessage(input) {
    const existingError = input.parentElement.querySelector('.input-error');
    if (existingError) {
        existingError.remove();
    }
}

// ========================================
// Print Page Functionality
// ========================================
function printPage() {
    window.print();
}

// ========================================
// Copy to Clipboard
// ========================================
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Đã copy: ' + text);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ========================================
// Disable Right Click on Images (Optional)
// ========================================
// Uncomment if you want to protect images
/*
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
});
*/

// ========================================
// Page Load Animation
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🎨 Bao Bì Ánh Dương', 'color: #FFB800; font-size: 24px; font-weight: bold;');
console.log('%c20 Năm Kinh Nghiệm - Uy Tín, Chất Lượng, Giá Tốt', 'color: #0066CC; font-size: 14px;');
console.log('%cWebsite developed with ❤️', 'color: #666; font-style: italic;');

// ========================================
// Railway Timeline Auto Animation
// ========================================
const stations = document.querySelectorAll('.station');
const railLine = document.getElementById('rail-line');
const train = document.getElementById('train');
let isAnimating = false;
let animationTimeout = null;

if (stations.length > 0 && railLine && train) {
    // Define colors for each step
    const stepColors = {
        1: { bg: 'linear-gradient(135deg, #0066CC 0%, #004080 100%)', class: 'train-blue' },
        2: { bg: 'linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)', class: 'train-yellow' },
        3: { bg: 'linear-gradient(135deg, #00C853 0%, #00BFA5 100%)', class: 'train-green' },
        4: { bg: 'linear-gradient(135deg, #FF4444 0%, #D32F2F 100%)', class: 'train-red' },
        5: { bg: 'linear-gradient(135deg, #0066CC 0%, #004080 100%)', class: 'train-blue' },
        6: { bg: 'linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)', class: 'train-yellow' },
        7: { bg: 'linear-gradient(135deg, #00C853 0%, #00BFA5 100%)', class: 'train-green' },
        8: { bg: 'linear-gradient(135deg, #FF4444 0%, #D32F2F 100%)', class: 'train-red' },
        9: { bg: 'linear-gradient(135deg, #0066CC 0%, #004080 100%)', class: 'train-blue' },
        10: { bg: 'linear-gradient(135deg, #FFB800 0%, #FF8C00 100%)', class: 'train-yellow' }
    };
    
    // Function to activate a specific station
    function activateStation(step) {
        // Activate all stations up to current step
        stations.forEach(s => {
            const sStep = parseInt(s.dataset.step);
            if (sStep <= step) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
        
        // Extend railway line
        const progress = ((step - 1) / 9) * 100;
        railLine.style.width = progress + '%';
        
        // Move train to station position
        const trainPosition = `calc(${progress}% - 20px)`;
        train.style.left = trainPosition;
        
        // Change train color to blue for all stations (đồng nhất màu)
        train.classList.remove('train-blue', 'train-yellow', 'train-green', 'train-red');
        train.classList.add('train-blue');
        train.style.background = 'linear-gradient(135deg, #0066CC 0%, #004080 100%)';
        train.style.boxShadow = '0 4px 15px rgba(0, 102, 204, 0.4)';
    }
    
    // Function to auto-animate through all stations
    function autoAnimate() {
        if (isAnimating) return;
        
        isAnimating = true;
        let currentStep = 1;
        const totalSteps = stations.length;
        const delayPerStep = 800; // 0.8 seconds per station (vừa phải)
        
        // Reset to start
        stations.forEach(s => s.classList.remove('active'));
        railLine.style.width = '0%';
        train.style.left = 'calc(0% - 20px)';
        train.style.background = stepColors[1].bg;
        train.classList.remove('train-blue', 'train-yellow', 'train-green', 'train-red');
        train.classList.add(stepColors[1].class);
        
        function animateStep() {
            if (currentStep <= totalSteps) {
                activateStation(currentStep);
                currentStep++;
                
                if (currentStep <= totalSteps) {
                    animationTimeout = setTimeout(animateStep, delayPerStep);
                } else {
                    // Animation complete
                    isAnimating = false;
                }
            }
        }
        
        // Start animation after a short delay
        setTimeout(animateStep, 300);
    }
    
    // Use Intersection Observer to trigger animation when section comes into view
    const processSection = document.getElementById('process');
    if (processSection) {
        const processObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isAnimating) {
                    // Section is visible, start auto animation
                    autoAnimate();
                    processObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });
        
        processObserver.observe(processSection);
    }
}

// ========================================
// Timeline Flow Line Animation
// ========================================
const timelineSteps = document.querySelectorAll('.timeline-step');
const flowLineActive = document.querySelector('.flow-line-active');

if (timelineSteps.length > 0 && flowLineActive) {
    timelineSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            const stepNumber = parseInt(step.getAttribute('data-step'));
            const percentage = ((stepNumber - 1) / 3) * 100;
            flowLineActive.style.width = percentage + '%';
        });
    });

    // Reset flow line when mouse leaves timeline
    const timelineFlow = document.querySelector('.timeline-flow');
    if (timelineFlow) {
        timelineFlow.addEventListener('mouseleave', () => {
            flowLineActive.style.width = '0%';
        });
    }
}

// ========================================
// Export functions for global use (if needed)
// ========================================
window.copyToClipboard = copyToClipboard;
window.printPage = printPage;