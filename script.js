// MENU DE NAVIGATION PRINCIPAL DU SITE 
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.navbar-toggle-1');
    const menu = document.querySelector('.navbar-menu');
    const hasSubmenu = document.querySelector('.has-submenu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            console.log('Navbar toggle clicked');
        });
    }

    if (hasSubmenu) {
        hasSubmenu.addEventListener('mouseenter', function() {
            this.querySelector('.submenu').classList.add('submenu-active');
        });

        hasSubmenu.addEventListener('mouseleave', function() {
            this.querySelector('.submenu').classList.remove('submenu-active');
        });
    }
});

    
    

    // Gestion des sections collapsibles
    document.querySelectorAll('.collapsible').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            if (content) {
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            } else {
                console.error('Contenu collapsible non trouvé.');
            }
        });
    });


// BOUTONS COPIE DES CODES 

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const code = button.nextElementSibling.innerText; // Récupérer le code à copier
        navigator.clipboard.writeText(code).then(() => {
            button.textContent = 'Copié!';
            setTimeout(() => {
                button.textContent = 'Copier';
            }, 2000);
        }).catch(err => {
            console.error('Erreur lors de la copie : ', err);
        });
    });
});

// Menu de navigation 4 

function toggleMenu() {
    var menu = document.querySelector('.menu-content');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// JavaScript pour l'Animation de Glissement
function toggleSlideMenu() {
    var menu = document.querySelector('.nav-slide');
    menu.classList.toggle('active');
}


// Barre de recherche avec bordures arrondis

document.addEventListener('DOMContentLoaded', function() {
    // Barre de recherche avec bordures arrondies
    const roundedSearchInput = document.querySelector('.container-rounded-search input[type="search"]');
    
    if (roundedSearchInput) {
        roundedSearchInput.addEventListener('focus', function() {
            roundedSearchInput.style.borderColor = '#0056b3'; // Change border color on focus
        });

        roundedSearchInput.addEventListener('blur', function() {
            roundedSearchInput.style.borderColor = '#007BFF'; // Reset border color when focus is lost
        });

        roundedSearchInput.addEventListener('input', function() {
            console.log('User is typing: ', roundedSearchInput.value); // Example action
        });
    }

    // Barre de Recherche avec Fond Gradient
    const gradientSearchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    if (gradientSearchInput && searchResults) {
        const data = [
            'Planète Mars',
            'Planète Vénus',
            'Planète Terre',
            'Planète Jupiter',
            'Planète Saturne',
            'Planète Uranus',
            'Planète Neptune'
        ];

        function updateResults(query) {
            searchResults.innerHTML = '';
            if (query) {
                const filteredData = data.filter(item =>
                    item.toLowerCase().includes(query.toLowerCase())
                );

                if (filteredData.length > 0) {
                    searchResults.style.display = 'block';
                    filteredData.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        li.addEventListener('click', function() {
                            gradientSearchInput.value = item;
                            searchResults.style.display = 'none';
                        });
                        searchResults.appendChild(li);
                    });
                } else {
                    searchResults.style.display = 'none';
                }
            } else {
                searchResults.style.display = 'none';
            }
        }

        gradientSearchInput.addEventListener('input', function() {
            updateResults(gradientSearchInput.value);
        });

        document.addEventListener('click', function(event) {
            if (!gradientSearchInput.contains(event.target) && !searchResults.contains(event.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
});