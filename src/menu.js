function createMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Clear existing content
    
    // Create menu section
    const menuSection = document.createElement('div');
    menuSection.className = 'menu-section';
    
    // Add menu title
    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    menuSection.appendChild(title);
    
    // Create menu categories
    const categories = [
        {
            name: 'Appetizers',
            items: [
                { name: 'French Onion Soup', price: '12', description: 'Classic soup with melted Gruyère cheese' },
                { name: 'Escargots', price: '16', description: 'Traditional Burgundy snails in garlic herb butter' }
            ]
        },
        {
            name: 'Main Courses',
            items: [
                { name: 'Coq au Vin', price: '28', description: 'Braised chicken in red wine sauce' },
                { name: 'Beef Bourguignon', price: '32', description: 'Classic French beef stew' }
            ]
        },
        {
            name: 'Desserts',
            items: [
                { name: 'Crème Brûlée', price: '10', description: 'Classic vanilla custard with caramelized sugar' },
                { name: 'Chocolate Soufflé', price: '12', description: 'Warm chocolate soufflé with vanilla ice cream' }
            ]
        }
    ];
    
    // Create menu items
    categories.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'menu-category';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.name;
        categorySection.appendChild(categoryTitle);
        
        category.items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            
            const itemHeader = document.createElement('div');
            itemHeader.className = 'item-header';
            
            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            
            const itemPrice = document.createElement('span');
            itemPrice.className = 'price';
            itemPrice.textContent = `$${item.price}`;
            
            itemHeader.appendChild(itemName);
            itemHeader.appendChild(itemPrice);
            
            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            
            menuItem.appendChild(itemHeader);
            menuItem.appendChild(itemDescription);
            categorySection.appendChild(menuItem);
        });
        
        menuSection.appendChild(categorySection);
    });
    
    content.appendChild(menuSection);
}

export default createMenu;
