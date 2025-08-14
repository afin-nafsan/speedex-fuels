// SpeedEX Website Search Functionality
(function ($) {
    "use strict";

    // Search data - this contains all searchable content from the website
    const searchData = [
        {
            title: "Diesel Fuel",
            description: "High-quality diesel fuel for transportation, industrial, and commercial applications",
            keywords: ["diesel", "fuel", "transportation", "industrial", "commercial"],
            url: "service.html#diesel",
            category: "Products"
        },
        {
            title: "Crude Oil",
            description: "Premium crude oil supply for refineries and processing facilities",
            keywords: ["crude oil", "refinery", "processing", "petroleum"],
            url: "service.html#crude-oil",
            category: "Products"
        },
        {
            title: "Gasoline",
            description: "Premium gasoline fuels for automotive and light vehicle applications",
            keywords: ["gasoline", "automotive", "vehicle", "fuel"],
            url: "service.html#gasoline",
            category: "Products"
        },
        {
            title: "Aviation/Jet Fuel",
            description: "Specialized aviation fuels meeting strict international standards",
            keywords: ["aviation", "jet fuel", "aircraft", "military", "commercial"],
            url: "service.html#aviation",
            category: "Products"
        },
        {
            title: "Butane",
            description: "High-purity butane gas for industrial applications and heating",
            keywords: ["butane", "gas", "industrial", "heating", "fuel"],
            url: "service.html#butane",
            category: "Products"
        },
        {
            title: "Kerosene",
            description: "Premium kerosene for heating, lighting, and industrial applications",
            keywords: ["kerosene", "heating", "lighting", "industrial"],
            url: "service.html#kerosene",
            category: "Products"
        },
        {
            title: "About SpeedEX",
            description: "Responsible supplier of international quality refined petroleum products",
            keywords: ["about", "company", "supplier", "petroleum", "quality"],
            url: "about.html",
            category: "Company"
        },
        {
            title: "Contact Us",
            description: "Get in touch with SpeedEX for your fuel trading needs",
            keywords: ["contact", "get quote", "inquiry", "support"],
            url: "contact.html",
            category: "Contact"
        },
        {
            title: "Our Operations",
            description: "Global fuel trading operations and logistics",
            keywords: ["operations", "logistics", "global", "trading"],
            url: "project.html",
            category: "Operations"
        },
        {
            title: "International Quality",
            description: "Meeting international standards for refined petroleum products",
            keywords: ["international", "quality", "standards", "certification"],
            url: "index.html#about",
            category: "Quality"
        },
        {
            title: "24/7 Global Operations",
            description: "Round-the-clock fuel supply and support worldwide",
            keywords: ["24/7", "global", "operations", "support", "worldwide"],
            url: "contact.html",
            category: "Operations"
        },
        {
            title: "Fuel Trading Services",
            description: "Comprehensive fuel trading and supply chain solutions",
            keywords: ["trading", "services", "supply chain", "solutions"],
            url: "service.html",
            category: "Services"
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
                    No results found. Try searching for: diesel, gasoline, aviation fuel, crude oil, butane, kerosene
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
