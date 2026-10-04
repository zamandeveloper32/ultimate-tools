// ==========================================
// ULTIMATE TOOLS - SEARCH SYSTEM
// ==========================================

const tools = [
    {
        name: "Centimeters to Meters",
        description: "Convert centimeters to meters quickly.",
        keywords: ["cm", "centimeter", "centimeters", "meter", "meters"],
        url: "#"
    },

    {
        name: "Meters to Centimeters",
        description: "Convert meters to centimeters quickly.",
        keywords: ["m", "meter", "meters", "cm", "centimeter"],
        url: "#"
    },

    {
        name: "Kilograms to Pounds",
        description: "Convert kilograms to pounds.",
        keywords: ["kg", "kilogram", "kilograms", "pound", "pounds", "lbs"],
        url: "#"
    },

    {
        name: "Pounds to Kilograms",
        description: "Convert pounds to kilograms.",
        keywords: ["lb", "lbs", "pound", "pounds", "kg", "kilogram"],
        url: "#"
    },

    {
        name: "Celsius to Fahrenheit",
        description: "Convert Celsius temperature to Fahrenheit.",
        keywords: ["celsius", "fahrenheit", "temperature", "c", "f"],
        url: "#"
    },

    {
        name: "Fahrenheit to Celsius",
        description: "Convert Fahrenheit temperature to Celsius.",
        keywords: ["fahrenheit", "celsius", "temperature", "f", "c"],
        url: "#"
    },

    {
        name: "Percentage Calculator",
        description: "Calculate percentages quickly and easily.",
        keywords: ["percentage", "percent", "%", "math"],
        url: "#"
    },

    {
        name: "Age Calculator",
        description: "Calculate your exact age from your date of birth.",
        keywords: ["age", "birthday", "date", "birth"],
        url: "#"
    },

    {
        name: "BMI Calculator",
        description: "Calculate your Body Mass Index.",
        keywords: ["bmi", "body mass", "health", "weight"],
        url: "#"
    },

    {
        name: "Discount Calculator",
        description: "Calculate discounts and final prices.",
        keywords: ["discount", "sale", "price", "percentage"],
        url: "#"
    }
];


// ==========================================
// ELEMENTS
// ==========================================

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");


// ==========================================
// CREATE SEARCH RESULTS
// ==========================================

function createSearchResults(results) {

    let resultsContainer =
        document.querySelector(".search-results");

    if (!resultsContainer) {

        resultsContainer =
            document.createElement("div");

        resultsContainer.className =
            "search-results";

        document
            .querySelector(".search-box")
            .after(resultsContainer);
    }

    resultsContainer.innerHTML = "";

    if (results.length === 0) {

        resultsContainer.innerHTML = `
            <div class="no-results">
                <strong>No tools found</strong>
                <p>Try searching for something like "cm", "kg", "percentage" or "age".</p>
            </div>
        `;

        return;
    }


    results.forEach(tool => {

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


// ==========================================
// SEARCH FUNCTION
// ==========================================

function performSearch() {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();

    if (!query) {

        const resultsContainer =
            document.querySelector(".search-results");

        if (resultsContainer) {
            resultsContainer.innerHTML = "";
        }

        return;
    }


    const results =
        tools.filter(tool => {

            const searchableText =
                (
                    tool.name +
                    " " +
                    tool.description +
                    " " +
                    tool.keywords.join(" ")
                ).toLowerCase();

            return searchableText.includes(query);

        });


    createSearchResults(results);
}


// ==========================================
// LIVE SEARCH
// ==========================================

searchInput.addEventListener(
    "input",
    performSearch
);


// ==========================================
// SEARCH BUTTON
// ==========================================

searchButton.addEventListener(
    "click",
    performSearch
);
