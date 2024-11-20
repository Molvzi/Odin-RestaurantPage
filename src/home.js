function createHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    
    // Create and append title
    const title = document.createElement('h1');
    title.textContent = 'Welcome to La Maison Délicieuse';
    content.appendChild(title);
    
    // Create and append hero image
    const heroImage = document.createElement('img');
    heroImage.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4';
    heroImage.alt = 'Restaurant interior';
    heroImage.className = 'hero-image';
    content.appendChild(heroImage);
    
    // Create and append subtitle
    const subtitle = document.createElement('h2');
    subtitle.textContent = 'Experience Fine Dining at Its Best';
    content.appendChild(subtitle);
    
    // Create and append description
    const description = document.createElement('div');
    description.className = 'description';
    
    const p1 = document.createElement('p');
    p1.textContent = 'Nestled in the heart of the city, La Maison Délicieuse brings you an unforgettable dining experience. Our award-winning chefs combine traditional techniques with modern innovation to create dishes that will delight your senses.';
    
    const p2 = document.createElement('p');
    p2.textContent = 'Join us for lunch or dinner and discover why we\'ve been voted the city\'s best restaurant for three years running.';
    
    description.appendChild(p1);
    description.appendChild(p2);
    content.appendChild(description);
    
    // Create and append hours section
    const hours = document.createElement('div');
    hours.className = 'hours';
    
    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Opening Hours';
    
    const weekdayHours = document.createElement('p');
    weekdayHours.textContent = 'Monday - Friday: 11:00 AM - 10:00 PM';
    
    const weekendHours = document.createElement('p');
    weekendHours.textContent = 'Saturday - Sunday: 10:00 AM - 11:00 PM';
    
    hours.appendChild(hoursTitle);
    hours.appendChild(weekdayHours);
    hours.appendChild(weekendHours);
    content.appendChild(hours);
}

export default createHome;
