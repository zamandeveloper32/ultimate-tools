const tools = [

    // =========================
    // LENGTH CONVERTERS
    // =========================

    {
        name: "CM to M",
        description: "Convert centimeters to meters.",
        category: "Length",
        type: "converter",
        keywords: ["cm", "centimeter", "centimeters", "meter", "meters", "length"],
        url: "converters/cm-to-m.html"
    },

    {
        name: "M to CM",
        description: "Convert meters to centimeters.",
        category: "Length",
        type: "converter",
        keywords: ["m", "meter", "meters", "cm", "centimeter", "length"],
        url: "converters/m-to-cm.html"
    },

    {
        name: "KM to Miles",
        description: "Convert kilometers to miles.",
        category: "Length",
        type: "converter",
        keywords: ["km", "kilometer", "kilometers", "miles", "distance"],
        url: "converters/km-to-miles.html"
    },

    {
        name: "Miles to KM",
        description: "Convert miles to kilometers.",
        category: "Length",
        type: "converter",
        keywords: ["mile", "miles", "km", "kilometer", "distance"],
        url: "converters/miles-to-km.html"
    },

    {
        name: "Inches to CM",
        description: "Convert inches to centimeters.",
        category: "Length",
        type: "converter",
        keywords: ["inch", "inches", "cm", "centimeter", "length"],
        url: "converters/inches-to-cm.html"
    },

    {
        name: "CM to Inches",
        description: "Convert centimeters to inches.",
        category: "Length",
        type: "converter",
        keywords: ["cm", "centimeter", "inch", "inches", "length"],
        url: "converters/cm-to-inches.html"
    },

    {
        name: "Feet to Meters",
        description: "Convert feet to meters.",
        category: "Length",
        type: "converter",
        keywords: ["feet", "foot", "meters", "meter", "length"],
        url: "converters/feet-to-meters.html"
    },

    {
        name: "Meters to Feet",
        description: "Convert meters to feet.",
        category: "Length",
        type: "converter",
        keywords: ["meter", "meters", "feet", "foot", "length"],
        url: "converters/meters-to-feet.html"
    },


    // =========================
    // WEIGHT CONVERTERS
    // =========================

    {
        name: "KG to Pounds",
        description: "Convert kilograms to pounds.",
        category: "Weight",
        type: "converter",
        keywords: ["kg", "kilogram", "kilograms", "lb", "lbs", "pounds", "weight"],
        url: "converters/kg-to-lbs.html"
    },

    {
        name: "Pounds to KG",
        description: "Convert pounds to kilograms.",
        category: "Weight",
        type: "converter",
        keywords: ["pound", "pounds", "lb", "lbs", "kg", "kilogram", "weight"],
        url: "converters/lbs-to-kg.html"
    },

    {
        name: "Grams to Ounces",
        description: "Convert grams to ounces.",
        category: "Weight",
        type: "converter",
        keywords: ["gram", "grams", "ounce", "ounces", "weight"],
        url: "converters/grams-to-ounces.html"
    },

    {
        name: "Ounces to Grams",
        description: "Convert ounces to grams.",
        category: "Weight",
        type: "converter",
        keywords: ["ounce", "ounces", "gram", "grams", "weight"],
        url: "converters/ounces-to-grams.html"
    },


    // =========================
    // TEMPERATURE
    // =========================

    {
        name: "Celsius to Fahrenheit",
        description: "Convert Celsius temperatures to Fahrenheit.",
        category: "Temperature",
        type: "converter",
        keywords: ["celsius", "fahrenheit", "temperature", "c", "f"],
        url: "converters/celsius-to-fahrenheit.html"
    },

    {
        name: "Fahrenheit to Celsius",
        description: "Convert Fahrenheit temperatures to Celsius.",
        category: "Temperature",
        type: "converter",
        keywords: ["fahrenheit", "celsius", "temperature", "f", "c"],
        url: "converters/fahrenheit-to-celsius.html"
    },


    // =========================
    // SPEED
    // =========================

    {
        name: "KM/H to MPH",
        description: "Convert kilometers per hour to miles per hour.",
        category: "Speed",
        type: "converter",
        keywords: ["kmh", "km/h", "mph", "speed", "kilometers per hour"],
        url: "converters/kmh-to-mph.html"
    },

    {
        name: "MPH to KM/H",
        description: "Convert miles per hour to kilometers per hour.",
        category: "Speed",
        type: "converter",
        keywords: ["mph", "kmh", "km/h", "speed", "miles per hour"],
        url: "converters/mph-to-kmh.html"
    },


    // =========================
    // MATH CALCULATORS
    // =========================

    {
        name: "Percentage Calculator",
        description: "Calculate percentages quickly and easily.",
        category: "Math",
        type: "calculator",
        keywords: ["percentage", "percent", "%", "math"],
        url: "calculators/percentage.html"
    },

    {
        name: "Fraction Calculator",
        description: "Calculate and simplify fractions.",
        category: "Math",
        type: "calculator",
        keywords: ["fraction", "fractions", "math", "numerator", "denominator"],
        url: "calculators/fraction-calculator.html"
    },

    {
        name: "Average Calculator",
        description: "Calculate the average of a set of numbers.",
        category: "Math",
        type: "calculator",
        keywords: ["average", "mean", "numbers", "math"],
        url: "calculators/average-calculator.html"
    },

    {
        name: "Percentage Change Calculator",
        description: "Calculate percentage increase or decrease.",
        category: "Math",
        type: "calculator",
        keywords: ["percentage change", "percent change", "increase", "decrease"],
        url: "calculators/percentage-change.html"
    },

    {
        name: "Discount Percentage Calculator",
        description: "Calculate discounts and percentage savings.",
        category: "Math",
        type: "calculator",
        keywords: ["discount", "percentage", "sale", "off", "savings"],
        url: "calculators/discount-percentage.html"
    },


    // =========================
    // DATE & TIME
    // =========================

    {
        name: "Age Calculator",
        description: "Calculate your exact age from your date of birth.",
        category: "Date & Time",
        type: "calculator",
        keywords: ["age", "birthday", "date of birth", "dob"],
        url: "calculators/age.html"
    },

    {
        name: "Date Difference Calculator",
        description: "Calculate the difference between two dates.",
        category: "Date & Time",
        type: "calculator",
        keywords: ["date", "difference", "days", "time", "duration"],
        url: "calculators/date-difference.html"
    },

    {
        name: "Time Calculator",
        description: "Add and subtract hours and minutes.",
        category: "Date & Time",
        type: "calculator",
        keywords: ["time", "hours", "minutes", "add time", "subtract time"],
        url: "calculators/time-calculator.html"
    },


    // =========================
    // HEALTH
    // =========================

    {
        name: "BMI Calculator",
        description: "Calculate Body Mass Index using height and weight.",
        category: "Health",
        type: "calculator",
        keywords: ["bmi", "body mass index", "weight", "height", "health"],
        url: "calculators/bmi.html"
    },


    // =========================
    // FINANCE
    // =========================

    {
        name: "Discount Calculator",
        description: "Calculate sale prices, discounts and savings.",
        category: "Finance",
        type: "calculator",
        keywords: ["discount", "sale price", "savings", "original price"],
        url: "calculators/discount.html"
    },

    {
        name: "Compound Interest Calculator",
        description: "Calculate compound interest and future value.",
        category: "Finance",
        type: "calculator",
        keywords: ["compound interest", "interest", "investment", "finance"],
        url: "calculators/compound-interest.html"
    },

    {
        name: "Tip Calculator",
        description: "Calculate tips and split restaurant bills.",
        category: "Finance",
        type: "calculator",
        keywords: ["tip", "restaurant", "bill", "gratuity", "split bill"],
        url: "calculators/tip-calculator.html"
    },

    {
        name: "Loan Calculator",
        description: "Estimate monthly loan payments and total interest.",
        category: "Finance",
        type: "calculator",
        keywords: ["loan", "payment", "interest", "finance", "monthly payment"],
        url: "calculators/loan-calculator.html"
    },

    {
        name: "Loan Payoff Calculator",
        description: "Estimate how long it will take to pay off a loan.",
        category: "Finance",
        type: "calculator",
        keywords: ["loan payoff", "debt", "loan", "payment", "payoff"],
        url: "calculators/loan-payoff.html"
    },

    {
        name: "Salary Calculator",
        description: "Calculate salary and earnings.",
        category: "Finance",
        type: "calculator",
        keywords: ["salary", "pay", "income", "wage", "earnings"],
        url: "calculators/salary-calculator.html"
    },

    {
        name: "Mortgage Calculator",
        description: "Estimate monthly mortgage payments.",
        category: "Finance",
        type: "calculator",
        keywords: ["mortgage", "home loan", "house", "payment", "interest"],
        url: "calculators/mortgage-calculator.html"
    },

    {
        name: "Sales Tax Calculator",
        description: "Calculate sales tax and final prices.",
        category: "Finance",
        type: "calculator",
        keywords: ["sales tax", "tax", "price", "shopping"],
        url: "calculators/sales-tax-calculator.html"
    },

    {
        name: "VAT Calculator",
        description: "Calculate VAT and prices including or excluding VAT.",
        category: "Finance",
        type: "calculator",
        keywords: ["vat", "tax", "price", "including vat", "excluding vat"],
        url: "calculators/vat-calculator.html"
    },

    {
        name: "Profit Margin Calculator",
        description: "Calculate profit margin, revenue and profit.",
        category: "Finance",
        type: "calculator",
        keywords: ["profit", "margin", "revenue", "business", "profit margin"],
        url: "calculators/profit-margin-calculator.html"
    },

    {
        name: "CAGR Calculator",
        description: "Calculate compound annual growth rate.",
        category: "Finance",
        type: "calculator",
        keywords: ["cagr", "growth rate", "investment", "annual growth"],
        url: "calculators/cagr-calculator.html"
    },

    {
        name: "Break-Even Calculator",
        description: "Calculate the sales level needed to break even.",
        category: "Finance",
        type: "calculator",
        keywords: ["break even", "business", "fixed cost", "variable cost", "profit"],
        url: "calculators/break-even-calculator.html"
    },

    {
        name: "ROI Calculator",
        description: "Calculate return on investment and profit.",
        category: "Finance",
        type: "calculator",
        keywords: ["roi", "return on investment", "investment", "profit"],
        url: "calculators/roi-calculator.html"
    },

    {
        name: "EMI Calculator",
        description: "Calculate monthly EMI payments for a loan.",
        category: "Finance",
        type: "calculator",
        keywords: ["emi", "loan", "monthly payment", "interest", "finance"],
        url: "calculators/emi-calculator.html"
    },


    // =========================
    // DIGITAL TOOLS
    // =========================

    {
        name: "Word Counter",
        description: "Count words, characters and text length.",
        category: "Digital",
        type: "tool",
        keywords: ["word counter", "words", "characters", "text", "writing"],
        url: "calculators/word-counter.html"
    },

    {
        name: "Password Generator",
        description: "Generate secure random passwords.",
        category: "Digital",
        type: "tool",
        keywords: ["password", "secure password", "generator", "security"],
        url: "calculators/password-generator.html"
    },


    // =========================
    // HOME IMPROVEMENT
    // =========================

    {
        name: "Paint Calculator",
        description: "Calculate how much paint you need for walls and ceilings.",
        category: "Home Improvement",
        type: "calculator",
        keywords: [
            "paint",
            "paint calculator",
            "wall paint",
            "ceiling paint",
            "gallons",
            "litres",
            "liters",
            "home improvement",
            "walls",
            "ceiling"
        ],
        url: "calculators/paint-calculator.html"
    }

];
