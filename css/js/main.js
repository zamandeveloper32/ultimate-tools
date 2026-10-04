document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");
    const searchBox = document.querySelector(".search-box");

    if (!searchInput || !searchBox) {
        console.error("Search box not found.");
        return;
    }

    function createSearchResults(results) {

        let resultsContainer = document.querySelector(".search-results");

        if (!resultsContainer) {
            resultsContainer = document.createElement("div");
            resultsContainer.className = "search-results";
            searchBox.parentNode.appendChild(resultsContainer);
        }

        resultsContainer.innerHTML = "";

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <strong>No tools found</strong>
                    <p>Try searching for cm, kg, percentage or age.</p>
                </div>
            `;
            return;
        }

        results.forEach(function (tool) {

            const result = document.createElement("a");

            result.className = "search-result";
            result.href = tool.url;

            result.innerHTML = `
                <div>
                    <h3>${tool.name}</h3>
                    <p>${tool.description}</p>
                </div>
                <span>→</span>
            `;

            resultsContainer.appendChild(result);
        });
    }


    function performSearch() {

        const query = searchInput.value.trim().toLowerCase();

        if (!query) {

            const resultsContainer =
                document.querySelector(".search-results");

            if (resultsContainer) {
                resultsContainer.remove();
            }

            return;
        }


        // Check whether tools.js loaded
        if (typeof tools === "undefined") {

            console.error(
                "ERROR: tools.js did not load correctly."
            );

            return;
        }


        const results = tools.filter(function (tool) {

            const searchableText = [
                tool.name,
                tool.description,
                tool.category,
                ...(tool.keywords || [])
            ]
            .join(" ")
            .toLowerCase();

            return searchableText.includes(query);
        });


        createSearchResults(results);
    }


    searchInput.addEventListener(
        "input",
        performSearch
    );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            performSearch
        );

    }


    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {
                performSearch();
            }

        }
    );

});
