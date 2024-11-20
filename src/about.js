function createAbout() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    
    // Create about section
    const aboutSection = document.createElement('div');
    aboutSection.className = 'about-section';
    
    // Add title
    const title = document.createElement('h1');
    title.textContent = 'About Us';
    aboutSection.appendChild(title);
    
    // Add story section
    const storySection = document.createElement('div');
    storySection.className = 'story';
    
    const storyTitle = document.createElement('h2');
    storyTitle.textContent = 'Our Story';
    
    const storyText = document.createElement('p');
    storyText.textContent = 'Founded in 1985, La Maison Délicieuse has been serving exceptional French cuisine for over three decades. Our commitment to quality ingredients and traditional cooking methods has made us a cornerstone of the local culinary scene.';
    
    storySection.appendChild(storyTitle);
    storySection.appendChild(storyText);
    
    // Add chef section
    const chefSection = document.createElement('div');
    chefSection.className = 'chef';
    
    const chefTitle = document.createElement('h2');
    chefTitle.textContent = 'Our Chef';
    
    const chefText = document.createElement('p');
    chefText.textContent = 'Executive Chef Pierre Dubois brings over 20 years of experience from some of the finest restaurants in France. His innovative approach to classic French cuisine has earned our restaurant numerous awards and accolades.';
    
    chefSection.appendChild(chefTitle);
    chefSection.appendChild(chefText);
    
    // Add contact section
    const contactSection = document.createElement('div');
    contactSection.className = 'contact';
    
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    
    const address = document.createElement('p');
    address.innerHTML = '123 Gourmet Street<br>Foodie City, FC 12345';
    
    const phone = document.createElement('p');
    phone.textContent = 'Phone: (555) 123-4567';
    
    const email = document.createElement('p');
    email.textContent = 'Email: info@lamaisondelicieuse.com';
    
    contactSection.appendChild(contactTitle);
    contactSection.appendChild(address);
    contactSection.appendChild(phone);
    contactSection.appendChild(email);
    
    // Append all sections
    aboutSection.appendChild(storySection);
    aboutSection.appendChild(chefSection);
    aboutSection.appendChild(contactSection);
    
    content.appendChild(aboutSection);
}

export default createAbout;
