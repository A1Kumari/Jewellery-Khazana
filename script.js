const menuToggle = document.getElementById('menu-toggle');
        const closeMenu = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const womenToggle = document.getElementById('women-toggle');
        const womenDropdown = document.getElementById('women-dropdown');

        // Open mobile menu
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });

        // Close mobile menu
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });

        // Toggle Women's Collection dropdown
        womenToggle.addEventListener('click', () => {
            womenDropdown.classList.toggle('hidden');
        });