// SpeedEX Website Search Functionality
(function ($) {
    "use strict";

    // Search data - this contains all searchable content from the website
    const searchData = [
        // Main Products from products.html
        {
            title: "CRUDE OIL",
            description: "Premium crude oil supply for refineries and processing facilities worldwide",
            keywords: ["crude oil", "refinery", "processing", "petroleum", "oil"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "LPG",
            description: "Liquefied Petroleum Gas for domestic and industrial applications",
            keywords: ["lpg", "liquefied petroleum gas", "gas", "domestic", "industrial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "LNG",
            description: "Liquefied Natural Gas for power generation and transportation",
            keywords: ["lng", "liquefied natural gas", "natural gas", "power", "transportation"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "CNG",
            description: "Compressed Natural Gas for automotive and industrial use",
            keywords: ["cng", "compressed natural gas", "automotive", "industrial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "GASOLINE",
            description: "Premium gasoline fuels for automotive and light vehicle applications",
            keywords: ["gasoline", "automotive", "vehicle", "fuel", "petrol"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "DIESEL",
            description: "High-quality diesel fuel for transportation and industrial applications",
            keywords: ["diesel", "fuel", "transportation", "industrial", "commercial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "BUTANE",
            description: "High-purity butane gas for industrial and commercial applications",
            keywords: ["butane", "gas", "industrial", "commercial", "fuel"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "FUEL OIL / BUNKER OIL",
            description: "Marine fuel oil and bunker oil for shipping and maritime operations",
            keywords: ["fuel oil", "bunker oil", "marine", "shipping", "maritime"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "AVIATION FUEL / JET FUEL",
            description: "Specialized aviation fuels for commercial and military aircraft",
            keywords: ["aviation fuel", "jet fuel", "aircraft", "military", "commercial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "KEROSENE",
            description: "Premium kerosene for heating, lighting, and industrial applications",
            keywords: ["kerosene", "heating", "lighting", "industrial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "PROPANE",
            description: "High-quality propane for heating, cooking, and industrial processes",
            keywords: ["propane", "heating", "cooking", "industrial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "MICROCRYSTALLINE WAX",
            description: "Specialized wax products for industrial and commercial applications",
            keywords: ["microcrystalline wax", "wax", "industrial", "commercial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "NAPALM",
            description: "Specialized fuel gel for industrial and military applications",
            keywords: ["napalm", "fuel gel", "industrial", "military"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "NAPHTHALENE",
            description: "Chemical compound for industrial and manufacturing processes",
            keywords: ["naphthalene", "chemical", "industrial", "manufacturing"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "PARAFFIN WAX",
            description: "High-quality paraffin wax for various industrial applications",
            keywords: ["paraffin wax", "wax", "industrial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "SULPHUR",
            description: "Elemental sulphur for chemical and industrial applications",
            keywords: ["sulphur", "sulfur", "chemical", "industrial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "HEATING OIL / FURNACE OIL",
            description: "Heating and furnace oil for residential and commercial heating",
            keywords: ["heating oil", "furnace oil", "heating", "residential", "commercial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "LUBRICANTS",
            description: "High-performance lubricants for machinery and equipment",
            keywords: ["lubricants", "lubrication", "machinery", "equipment"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "LIGHT FUEL",
            description: "Light fuel oils for specialized industrial applications",
            keywords: ["light fuel", "fuel oil", "industrial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "PETROLEUM WAX",
            description: "Petroleum wax products for various industrial applications",
            keywords: ["petroleum wax", "wax", "industrial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "PETROLEUM JELLY",
            description: "High-quality petroleum jelly for medical and industrial use",
            keywords: ["petroleum jelly", "medical", "industrial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "PLASTIC GRANULES",
            description: "Plastic granules for manufacturing and industrial processes",
            keywords: ["plastic granules", "manufacturing", "industrial"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "PETROLEUM COKE",
            description: "Petroleum coke for industrial fuel and manufacturing applications",
            keywords: ["petroleum coke", "coke", "industrial", "fuel"],
            url: "products.html",
            category: "Products"
        },
        {
            title: "SLACK WAX",
            description: "Slack wax for industrial and commercial applications",
            keywords: ["slack wax", "wax", "industrial", "commercial"],
            url: "products.html",
            category: "Products"
        },
        // Company Information
        {
            title: "About SpeedEX",
            description: "SpeedEX Fuel Trading LLC - Your reliable partner in global fuel supply",
            keywords: ["about", "company", "supplier", "petroleum", "quality", "speedex"],
            url: "about.html",
            category: "Company"
        },
        {
            title: "MyFuel Company",
            description: "On-demand diesel delivery directly at your doorstep",
            keywords: ["myfuel", "doorstep delivery", "on-demand", "diesel"],
            url: "about.html",
            category: "Company"
        },
        {
            title: "Contact Us",
            description: "Get in touch with SpeedEX for your fuel trading needs",
            keywords: ["contact", "get quote", "inquiry", "support", "phone", "email"],
            url: "contact.html",
            category: "Contact"
        },
        {
            title: "Our Features",
            description: "Premium fuel quality, fast global delivery, and environmental responsibility",
            keywords: ["features", "quality", "delivery", "environmental", "responsibility"],
            url: "feature.html",
            category: "Features"
        },
        {
            title: "Client Testimonials",
            description: "Reviews from satisfied customers across various industries",
            keywords: ["testimonials", "reviews", "customers", "feedback"],
            url: "testimonial.html",
            category: "Testimonials"
        },
        {
            title: "News & Updates",
            description: "Latest news and industry updates from SpeedEX",
            keywords: ["news", "updates", "blog", "industry"],
            url: "blog.html",
            category: "News"
        },
        {
            title: "24/7 Global Operations",
            description: "Round-the-clock fuel supply and support worldwide",
            keywords: ["24/7", "global", "operations", "support", "worldwide"],
            url: "contact.html",
            category: "Operations"
        },
        {
            title: "International Quality Standards",
            description: "Meeting international standards for refined petroleum products",
            keywords: ["international", "quality", "standards", "certification"],
            url: "index.html#about",
            category: "Quality"
        },
        {
            title: "Fuel Trading Services",
            description: "Comprehensive fuel trading and supply chain solutions",
            keywords: ["trading", "services", "supply chain", "solutions"],
            url: "service.html",
            category: "Services"
        },
        {
            title: "All Products",
            description: "Complete portfolio of 25 petroleum products",
            keywords: ["all products", "portfolio", "petroleum", "complete"],
            url: "products.html",
            category: "Products"
        }
    ];

    // Initialize search functionality
    function initSearch() {
        const searchInput = $('#searchInput');
        const searchResults = $('#searchResults');
        const resultsList = $('#resultsList');
        const searchIcon = $('#search-icon-1');

        // Search on input
        searchInput.on('input', function() {
            const query = $(this).val().toLowerCase().trim();
            
            if (query.length < 2) {
                searchResults.hide();
                return;
            }

            const results = performSearch(query);
            displayResults(results);
        });

        // Search on enter key
        searchInput.on('keypress', function(e) {
            if (e.which === 13) { // Enter key
                const query = $(this).val().toLowerCase().trim();
                if (query.length >= 2) {
                    const results = performSearch(query);
                    displayResults(results);
                }
            }
        });

        // Search on icon click
        searchIcon.on('click', function() {
            const query = searchInput.val().toLowerCase().trim();
            if (query.length >= 2) {
                const results = performSearch(query);
                displayResults(results);
            }
        });

        // Clear results when modal is hidden
        $('#searchModal').on('hidden.bs.modal', function() {
            searchInput.val('');
            searchResults.hide();
            resultsList.empty();
        });
    }

    // Perform search through the data
    function performSearch(query) {
        const results = [];
        
        searchData.forEach(item => {
            let score = 0;
            
            // Check title
            if (item.title.toLowerCase().includes(query)) {
                score += 10;
            }
            
            // Check description
            if (item.description.toLowerCase().includes(query)) {
                score += 5;
            }
            
            // Check keywords
            item.keywords.forEach(keyword => {
                if (keyword.toLowerCase().includes(query)) {
                    score += 3;
                }
            });
            
            // Check category
            if (item.category.toLowerCase().includes(query)) {
                score += 2;
            }
            
            if (score > 0) {
                results.push({
                    ...item,
                    score: score
                });
            }
        });
        
        // Sort by score (highest first)
        return results.sort((a, b) => b.score - a.score);
    }

    // Display search results
    function displayResults(results) {
        const searchResults = $('#searchResults');
        const resultsList = $('#resultsList');
        
        resultsList.empty();
        
        if (results.length === 0) {
            resultsList.append(`
                <div class="alert alert-info">
                    <i class="fas fa-info-circle me-2"></i>
                    No results found. Try searching for: diesel, gasoline, aviation fuel, crude oil, lpg, lng, lubricants, or any of our 25 petroleum products
                </div>
            `);
        } else {
            results.forEach(result => {
                const resultItem = `
                    <a href="${result.url}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start" onclick="closeSearchModal()">
                        <div class="ms-2 me-auto">
                            <div class="fw-bold text-primary">${result.title}</div>
                            <small class="text-muted">${result.description}</small>
                            <br>
                            <span class="badge bg-secondary rounded-pill">${result.category}</span>
                        </div>
                        <i class="fas fa-chevron-right text-muted"></i>
                    </a>
                `;
                resultsList.append(resultItem);
            });
        }
        
        searchResults.show();
    }

    // Close search modal function (global scope)
    window.closeSearchModal = function() {
        $('#searchModal').modal('hide');
    };

    // Initialize when document is ready
    $(document).ready(function() {
        initSearch();
    });

})(jQuery);
