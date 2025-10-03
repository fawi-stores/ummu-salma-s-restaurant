
/* ===================================
   About Page Specific Styles
   =================================== */

/* Page Header */
.page-header {
    position: relative;
    height: 50vh;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
    background-image: url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    margin-top: 70px;
}

.page-header-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(44, 95, 45, 0.85) 0%, rgba(26, 58, 27, 0.9) 100%);
}

.page-header .container {
    position: relative;
    z-index: 2;
    text-align: center;
    color: var(--text-white);
}

.page-title {
    font-family: var(--font-heading);
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.page-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--secondary-color);
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* Story Section */
.story-section {
    background: var(--text-white);
}

.story-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
    align-items: center;
}

.story-content {
    padding-right: var(--spacing-md);
}

.story-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: var(--spacing-md);
}

.story-image {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.story-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.story-image:hover img {
    transform: scale(1.05);
}

/* Timeline Section */
.timeline-section {
    background: var(--bg-light);
}

.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: var(--spacing-md) 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: var(--secondary-color);
}

.timeline-item {
    position: relative;
    margin-bottom: var(--spacing-xl);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
}

.timeline-item:nth-child(even) .timeline-year {
    order: 2;
    text-align: left;
}

.timeline-item:nth-child(even) .timeline-content {
    order: 1;
    text-align: right;
}

.timeline-year {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    color: var(--secondary-color);
    text-align: right;
    padding-right: var(--spacing-md);
    position: relative;
}

.timeline-year::after {
    content: '';
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: var(--secondary-color);
    border: 4px solid var(--bg-light);
    border-radius: 50%;
}

.timeline-item:nth-child(even) .timeline-year::after {
    left: -10px;
    right: auto;
}

.timeline-content {
    background: var(--text-white);
    padding: var(--spacing-md);
    border-radius: 10px;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-normal);
}

.timeline-content:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.timeline-content h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-sm);
}

.timeline-content p {
    color: var(--text-light);
    line-height: 1.6;
}

/* Chef Section */
.chef-section {
    background: var(--text-white);
}

.chef-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: var(--spacing-xl);
    align-items: center;
}

.chef-image {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.chef-image img {
    width: 100%;
    height: 600px;
    object-fit: cover;
}

.chef-badge {
    position: absolute;
    bottom: var(--spacing-md);
    left: var(--spacing-md);
    background: var(--secondary-color);
    color: var(--text-dark);
    padding: 0.75rem 1.5rem;
    border-radius: 30px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
}

.chef-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: var(--spacing-md);
}

.chef-achievements {
    display: grid;
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
}

.achievement-item {
    display: flex;
    gap: var(--spacing-md);
    align-items: center;
    padding: var(--spacing-md);
    background: var(--bg-light);
    border-radius: 10px;
    transition: all var(--transition-normal);
}

.achievement-item:hover {
    transform: translateX(10px);
    box-shadow: var(--shadow-md);
}

.achievement-icon {
    font-size: 2.5rem;
    flex-shrink: 0;
}

.achievement-text h4 {
    font-family: var(--font-heading);
    font-size: 1.2rem;
    color: var(--primary-color);
    margin-bottom: 0.25rem;
}

.achievement-text p {
    color: var(--text-light);
    font-size: 0.95rem;
}

/* Philosophy Section */
.philosophy-section {
    background: var(--bg-light);
}

.philosophy-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-md);
}

.philosophy-card {
    background: var(--text-white);
    padding: var(--spacing-lg);
    border-radius: 10px;
    box-shadow: var(--shadow-sm);
    text-align: center;
    transition: all var(--transition-normal);
}

.philosophy-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.philosophy-icon {
    font-size: 3.5rem;
    margin-bottom: var(--spacing-md);
}

.philosophy-title {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-md);
}

.philosophy-text {
    color: var(--text-light);
    line-height: 1.8;
}

/* Values Section */
.values-section {
    background: var(--text-white);
}

.values-content {
    max-width: 900px;
    margin: 0 auto;
}

.values-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-lg);
    margin-top: var(--spacing-lg);
}

.value-item {
    padding: var(--spacing-md);
    border-left: 4px solid var(--secondary-color);
    background: var(--bg-light);
    border-radius: 5px;
    transition: all var(--transition-normal);
}

.value-item:hover {
    transform: translateX(10px);
    box-shadow: var(--shadow-md);
}

.value-item h3 {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-sm);
}

.value-item p {
    color: var(--text-light);
    line-height: 1.6;
}

/* Team Section */
.team-section {
    background: var(--bg-light);
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-lg);
}

.team-member {
    background: var(--text-white);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-normal);
}

.team-member:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
}

.team-image {
    height: 350px;
    overflow: hidden;
}

.team-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.team-member:hover .team-image img {
    transform: scale(1.1);
}

.team-name {
    font-family: var(--font-heading);
    font-size: 1.5rem;
    color: var(--primary-color);
    padding: var(--spacing-md) var(--spacing-md) 0;
}

.team-role {
    color: var(--secondary-color);
    font-weight: 600;
    padding: 0 var(--spacing-md);
    margin-bottom: var(--spacing-sm);
}

.team-bio {
    color: var(--text-light);
    line-height: 1.6;
    padding: 0 var(--spacing-md) var(--spacing-md);
}

/* Responsive Design */
@media (max-width: 968px) {
    .story-grid,
    .chef-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
    
    .story-content {
        padding-right: 0;
    }
    
    .timeline::before {
        left: 20px;
    }
    
    .timeline-item {
        grid-template-columns: 1fr;
        padding-left: 50px;
    }
    
    .timeline-year {
        text-align: left;
        padding-right: 0;
        padding-left: var(--spacing-md);
    }
    
    .timeline-year::after {
        left: -35px;
        right: auto;
    }
    
    .timeline-item:nth-child(even) .timeline-year {
        order: 1;
        text-align: left;
    }
    
    .timeline-item:nth-child(even) .timeline-content {
        order: 2;
        text-align: left;
    }
    
    .timeline-item:nth-child(even) .timeline-year::after {
        left: -35px;
    }
}

@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
    }
    
    .page-subtitle {
        font-size: 1.2rem;
    }
    
    .chef-image img {
        height: 400px;
    }
}
