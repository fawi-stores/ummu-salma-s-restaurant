<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Gourmet Haven - Exquisite Dining Experience</title>
    <meta name="description" content="Experience culinary excellence at The Gourmet Haven. Discover our menu, make a reservation, and immerse yourself in sophisticated ambiance.">
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <!-- Google Fonts - Example (replace with actual elegant fonts) -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="main-header">
        <nav class="navbar">
            <div class="logo">
                <a href="index.html">
                    <img src="images/logo.png" alt="The Gourmet Haven Logo">
                </a>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="reservations.html">Reservations</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="events.html">Events & Private Dining</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <!-- Optional: <li><a href="blog.html">Blog</a></li> -->
            </ul>
            <div class="burger-menu">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero-section">
            <div class="hero-video-container">
                <video autoplay muted loop playsinline class="hero-video">
                    <source src="videos/hero-background.mp4" type="video/mp4">
                    <!-- Add other formats for wider browser support -->
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="hero-content">
                <h1 class="animated-tagline">Experience Culinary Excellence.</h1>
                <p class="intro-text">Where every dish is a masterpiece and every moment is an occasion.</p>
                <div class="cta-buttons">
                    <a href="menu.html" class="btn btn-primary">View Menu</a>
                    <a href="reservations.html" class="btn btn-secondary">Make a Reservation</a>
                </div>
            </div>
        </section>

        <section class="about-summary section-padding reveal-on-scroll">
            <div class="container">
                <div class="about-text">
                    <h2>Our Story, Our Passion</h2>
                    <p>The Gourmet Haven was born from a passion for exquisite food and unparalleled dining experiences. We meticulously source the finest ingredients, crafting dishes that are both innovative and deeply rooted in culinary tradition. Join us for a journey of flavors...</p>
                    <a href="about.html" class="btn btn-tertiary">Learn More</a>
                </div>
                <div class="about-image">
                    <img src="images/restaurant-interior-summary.jpg" alt="Elegant restaurant interior">
                </div>
            </div>
        </section>

        <section class="signature-dishes section-padding bg-light reveal-on-scroll">
            <div class="container">
                <h2>Signature Creations</h2>
                <p class="section-description">A glimpse into our chef's celebrated artistry.</p>
                <div class="dish-grid">
                    <div class="dish-item">
                        <img src="images/dish1.jpg" alt="Dish Name 1">
                        <h3>Seared Scallops</h3>
                        <p>Perfectly seared scallops with saffron risotto and asparagus.</p>
                    </div>
                    <div class="dish-item">
                        <img src="images/dish2.jpg" alt="Dish Name 2">
                        <h3>Duck Confit</h3>
                        <p>Crispy duck leg confit, served with rich potato gratin and cherry reduction.</p>
                    </div>
                    <div class="dish-item">
                        <img src="images/dish3.jpg" alt="Dish Name 3">
                        <h3>Chocolate Lava Cake</h3>
                        <p>Decadent chocolate lava cake with a molten center and vanilla bean ice cream.</p>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <a href="menu.html" class="btn btn-primary">View Full Menu</a>
                </div>
            </div>
        </section>

        <section class="testimonials section-padding parallax-bg reveal-on-scroll">
            <div class="container">
                <h2>What Our Guests Say</h2>
                <div class="testimonial-carousel">
                    <!-- Testimonial items will be populated/managed by JS for carousel functionality -->
                    <div class="testimonial-item">
                        <p>"An unforgettable dining experience! The ambiance, service, and food were all impeccable."</p>
                        <h4>- Emily R.</h4>
                    </div>
                    <div class="testimonial-item">
                        <p>"The Gourmet Haven is truly a gem. Every dish was a culinary delight."</p>
                        <h4>- David L.</h4>
                    </div>
                </div>
                <button class="carousel-nav prev">❮</button>
                <button class="carousel-nav next">❯</button>
            </div>
        </section>

        <section class="reservations-promo section-padding reveal-on-scroll">
            <div class="container text-center">
                <h2>Ready to Indulge?</h2>
                <p>Secure your table for an evening of culinary magic.</p>
                <a href="reservations.html" class="btn btn-primary btn-lg">Make a Reservation Today</a>
            </div>
        </section>
    </main>

    <footer class="main-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col about-col">
                    <img src="images/logo-light.png" alt="The Gourmet Haven Logo" class="footer-logo">
                    <p>The Gourmet Haven offers a refined dining experience with a focus on fresh, seasonal ingredients and innovative culinary techniques.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><img src="images/icon-facebook.png" alt="Facebook"></a>
                        <a href="#" aria-label="Instagram"><img src="images/icon-instagram.png" alt="Instagram"></a>
                        <a href="#" aria-label="Twitter"><img src="images/icon-twitter.png" alt="Twitter"></a>
                    </div>
                </div>
                <div class="footer-col links-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="menu.html">Menu</a></li>
                        <li><a href="events.html">Events</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-col contact-col">
                    <h3>Contact Us</h3>
                    <p>123 Culinary Lane, Gastronomy City, GC 45678</p>
                    <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
                    <p>Email: <a href="mailto:info@gourmethaven.com">info@gourmethaven.com</a></p>
                    <p><strong>Hours:</strong><br>Mon-Sat: 5 PM - 10 PM<br>Sunday: Closed</p>
                </div>
                <div class="footer-col newsletter-col">
                    <h3>Newsletter</h3>
                    <p>Stay updated with our latest dishes and events.</p>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Your Email Address" aria-label="Email for Newsletter">
                        <button type="submit" class="btn btn-newsletter">Subscribe</button>
                    </form>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 The Gourmet Haven. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Email Newsletter Pop-up (hidden by default) -->
    <div class="newsletter-popup-overlay">
        <div class="newsletter-popup">
            <button class="close-popup">&times;</button>
            <h3>Join Our Newsletter!</h3>
            <p>Be the first to know about our seasonal menus, special events, and exclusive offers.</p>
            <form class="popup-newsletter-form">
                <input type="text" placeholder="Your Name (Optional)" aria-label="Your Name">
                <input type="email" placeholder="Your Email Address" required aria-label="Your Email Address">
                <button type="submit" class="btn btn-primary">Subscribe Now</button>
            </form>
            <p class="popup-no-thanks"><a href="#">No thanks, I'll explore later.</a></p>
        </div>
    </div>

    <script src="js/main.js"></script>
</body>
</html>
