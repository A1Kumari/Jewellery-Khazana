// console.log("returened inside html")

// const menuToggle = document.getElementById('menu-toggle');
//         const closeMenu = document.getElementById('close-menu');
//         const mobileMenu = document.getElementById('mobile-menu');
//         const womenToggle = document.getElementById('women-toggle');
//         const womenDropdown = document.getElementById('women-dropdown');

//         // Open mobile menu
//         menuToggle.addEventListener('click', () => {
//             mobileMenu.classList.remove('hidden');
//         });

//         // Close mobile menu
//         closeMenu.addEventListener('click', () => {
//             mobileMenu.classList.add('hidden');
//         });

//         // Toggle Women's Collection dropdown
//         womenToggle.addEventListener('click', () => {
//             womenDropdown.classList.toggle('hidden');
//         });


        document.addEventListener("DOMContentLoaded", function () {
            const categories = [
                { img: "./assests/Subtração 216.png", name: "Bangles" },
                { img: "./assests/Path 1.png", name: "Chains" },
                { img: "./assests/Path 1 (1).png", name: "Chokers" },
                { img: "./assests/Subtração 215.png", name: "Chur" },
                { img: "./assests/Subtração 217.png", name: "Earrings" },
                { img: "./assests/Grupo 165335.png", name: "Lahari" },
                { img: "./assests/Grupo 165355.png", name: "Mantasha" },
                { img: "./assests/União 202.png", name: "Sankha & Pola" },
                { img: "./assests/União 197.png", name: "Sitahar" }
            ];
    
            const itemsPerPage = 5;
            let currentPage = 0;
            const totalPages = Math.ceil(categories.length / itemsPerPage);
    
            const categoryContainer = document.getElementById("category-container");
            const paginationDots = document.getElementById("pagination-dots");
    
            function renderCategories() {
                categoryContainer.innerHTML = "";
                const start = currentPage * itemsPerPage;
                const end = start + itemsPerPage;
                const pageItems = categories.slice(start, end);
    
                pageItems.forEach(category => {
                    const div = document.createElement("div");
                    div.classList.add("category-item", "text-center");
                    div.innerHTML = `
                        <img src="${category.img}" alt="${category.name}" class="category-icon mx-auto">
                        <span class="text-xs font-semibold block">${category.name}</span>
                    `;
                    categoryContainer.appendChild(div);
                });
    
                renderPagination();
            }
    
            function renderPagination() {
                paginationDots.innerHTML = "";
                for (let i = 0; i < totalPages; i++) {
                    const dot = document.createElement("span");
                    dot.classList.add("pagination-dot", "w-3", "h-3", "mx-1", "cursor-pointer");
                    if (i === currentPage) dot.classList.add("bg-gray-800");
                    else dot.classList.add("bg-gray-300");
    
                    dot.addEventListener("click", () => {
                        currentPage = i;
                        renderCategories();
                    });
    
                    paginationDots.appendChild(dot);
                }
            }
    
            renderCategories();
        });





        document.addEventListener("DOMContentLoaded", function () {
            const products = [
                { img: "./assests/Chain-Thumbnail-300x300.webp", name: "Gold Coins", oldPrice: "₹100", newPrice: "₹80" },
                { img: "./assests/necklace.webp", name: "Gold Bangles", oldPrice: "₹100", newPrice: "₹80" },
                { img: "./assests/Sitahar-Thumbnail-300x300.webp", name: "Gold Bangles", oldPrice: "₹100", newPrice: "₹80" },
                { img: "./assests/Tiara-Tikli.webp", name: "Gold Necklace", oldPrice: "₹100", newPrice: "₹80" },
                { img: "./assests/Grupo-165335.png", name: "Lahari", oldPrice: "₹120", newPrice: "₹90" },
                { img: "./assests/União-202.png", name: "Sankha & Pola", oldPrice: "₹150", newPrice: "₹110" },
                { img: "./assests/União-197.png", name: "Sitahar", oldPrice: "₹180", newPrice: "₹130" }
            ];
        
            const productContainer = document.querySelector(".product-grid");
            const paginationDotsContainer = document.querySelector(".pagination-dots");
        
            let currentPage = 0;
            let itemsPerPage = getItemsPerPage();
            const totalPages = Math.ceil(products.length / itemsPerPage);
        
            function getItemsPerPage() {
                return window.innerWidth >= 768 ? 4 : 3;
            }
        
            function renderProducts() {
                productContainer.innerHTML = "";
                itemsPerPage = getItemsPerPage(); 
                const start = currentPage * itemsPerPage;
                const end = start + itemsPerPage;
                const visibleProducts = products.slice(start, end);
        
                visibleProducts.forEach(product => {
                    const productHTML = `
                        <div class="relative w-80 h-100">
                            <div class="relative">
                                <img src="${product.img}" alt="${product.name}" class="w-full h-80 object-cover rounded-lg">
                                <div class="absolute bottom-3 left-0 right-0 flex justify-between px-3">
                                    <button class="buy-now-btn">Buy Now</button>
                                    <button class="cart-btn">🛒</button>
                                </div>
                            </div>
                            <div class="mt-2">
                                <p class="text-sm font-medium">${product.name}</p>
                                <div class="flex items-center">
                                    <p class="text-xs line-through text-gray-500">${product.oldPrice}</p>
                                    <p class="text-sm font-bold text-blue-600 ml-1">${product.newPrice}</p>
                                </div>
                            </div>
                        </div>`;
                    productContainer.innerHTML += productHTML;
                });
        
                renderPagination();
            }
        
            function renderPagination() {
                paginationDotsContainer.innerHTML = "";
                for (let i = 0; i < totalPages; i++) {
                    const dot = document.createElement("span");
                    dot.classList.add("pagination-dot", "w-3", "h-3", "mx-1", "cursor-pointer", "rounded-full");
                    dot.style.backgroundColor = i === currentPage ? "black" : "gray";
                    dot.addEventListener("click", () => {
                        currentPage = i;
                        renderProducts();
                    });
                    paginationDotsContainer.appendChild(dot);
                }
            }
        
            window.addEventListener("resize", () => {
                itemsPerPage = getItemsPerPage();
                renderProducts();
            });
        
            renderProducts();
        });
        