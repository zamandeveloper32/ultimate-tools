<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Paint Calculator - How Much Paint Do I Need?</title>

    <meta name="description"
          content="Free paint calculator to estimate wall and ceiling paint. Calculate paint needed, coats, doors, windows, waste and estimated cost.">

    <link rel="stylesheet" href="../css/style.css?v=7">

    <style>
        /* ==============================
           PAINT CALCULATOR
        ============================== */

        .paint-tool {
            max-width: 1100px;
            margin: 0 auto;
            padding: 20px 0 60px;
        }

        .paint-hero {
            text-align: center;
            margin-bottom: 35px;
        }

        .paint-hero h1 {
            font-size: 38px;
            margin-bottom: 10px;
        }

        .paint-hero p {
            max-width: 700px;
            margin: 0 auto;
            color: var(--muted);
            font-size: 16px;
            line-height: 1.6;
        }

        .paint-layout {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 25px;
            align-items: start;
        }

        .paint-card {
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 28px;
            box-shadow: 0 4px 18px rgba(0, 0, 0, 0.05);
        }

        .paint-card h2 {
            font-size: 20px;
            margin: 0 0 20px;
        }

        .section-title {
            margin-top: 30px !important;
            padding-top: 25px;
            border-top: 1px solid var(--border);
        }

        .field {
            margin-bottom: 18px;
        }

        .field label {
            display: block;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 7px;
        }

        .field input,
        .field select {
            width: 100%;
            box-sizing: border-box;
            padding: 12px 13px;
            border: 1px solid var(--border);
            border-radius: 8px;
            background: var(--white);
            color: var(--text);
            font-size: 15px;
            outline: none;
        }

        .field input:focus,
        .field select:focus {
            border-color: #777;
        }

        .two-columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        .field-note {
            display: block;
            margin-top: 5px;
            font-size: 12px;
            color: var(--muted);
        }

        .calculate-button {
            width: 100%;
            margin-top: 8px;
            padding: 14px 18px;
            border: 0;
            border-radius: 9px;
            background: #111827;
            color: white;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
        }

        .calculate-button:hover {
            opacity: 0.9;
        }

        .result-card {
            position: sticky;
            top: 20px;
        }

        .result-card h2 {
            margin-bottom: 6px;
        }

        .result-subtitle {
            color: var(--muted);
            font-size: 14px;
            margin-bottom: 22px;
        }

        .main-result {
            background: #f5f7fa;
            border-radius: 12px;
            padding: 22px;
            margin-bottom: 18px;
            text-align: center;
        }

        .main-result span {
            display: block;
            color: var(--muted);
            font-size: 13px;
            margin-bottom: 7px;
        }

        .main-result strong {
            display: block;
            font-size: 30px;
        }

        .result-list {
            display: flex;
            flex-direction: column;
            gap: 0;
        }

        .result-row {
            display: flex;
            justify-content: space-between;
            gap: 15px;
            padding: 14px 0;
            border-bottom: 1px solid var(--border);
        }

        .result-row:last-child {
            border-bottom: 0;
        }

        .result-row span {
            color: var(--muted);
            font-size: 14px;
        }

        .result-row strong {
            font-size: 14px;
            text-align: right;
        }

        .shopping-list {
            margin-top: 22px;
            padding: 18px;
            border-radius: 10px;
            background: #fafafa;
            border: 1px solid var(--border);
        }

        .shopping-list h3 {
            margin: 0 0 12px;
            font-size: 16px;
        }

        .shopping-list p {
            margin: 7px 0;
            font-size: 14px;
        }

        .error-message {
            display: none;
            margin-top: 15px;
            padding: 12px;
            border-radius: 8px;
            background: #fff3f3;
            border: 1px solid #f0caca;
            color: #a00000;
            font-size: 14px;
        }

        .helper-box {
            margin-top: 18px;
            padding: 14px;
            border-radius: 9px;
            background: #f8fafc;
            color: var(--muted);
            font-size: 13px;
            line-height: 1.5;
        }

        @media (max-width: 800px) {
            .paint-layout {
                grid-template-columns: 1fr;
            }

            .result-card {
                position: static;
            }

            .paint-hero h1 {
                font-size: 30px;
            }
        }

        @media (max-width: 500px) {
            .paint-card {
                padding: 20px;
            }

            .two-columns {
                grid-template-columns: 1fr;
                gap: 0;
            }

            .paint-hero h1 {
                font-size: 27px;
            }
        }
    </style>
</head>

<body>

<header class="site-header">
    <div class="container">
        <div class="logo">
            <a href="../index.html">Ultimate Tools</a>
        </div>

        <nav>
            <a href="../index.html">Home</a>
            <a href="../all-tools.html">All Tools</a>
        </nav>
    </div>
</header>


<main class="container">

    <div class="paint-tool">

        <div class="paint-hero">
            <h1>Paint Calculator</h1>

            <p>
                Find out how much paint you need for your walls and ceiling.
                Account for doors, windows, multiple coats and waste.
            </p>
        </div>


        <div class="paint-layout">

            <!-- =========================
                 INPUT CARD
            ========================== -->

            <div class="paint-card">

                <h2>Project Details</h2>


                <div class="two-columns">

                    <div class="field">
                        <label for="unit">Measurement Unit</label>

                        <select id="unit">
                            <option value="ft">Feet / Gallons</option>
                            <option value="m">Meters / Litres</option>
                        </select>
                    </div>


                    <div class="field">
                        <label for="paintArea">Paint Area</label>

                        <select id="paintArea">
                            <option value="walls">Walls Only</option>
                            <option value="ceiling">Ceiling Only</option>
                            <option value="both">Walls + Ceiling</option>
                        </select>
                    </div>

                </div>


                <h2 class="section-title">Room Dimensions</h2>


                <div class="two-columns">

                    <div class="field">
                        <label for="length">Room Length</label>

                        <input
                            type="number"
                            id="length"
                            placeholder="20"
                            min="0"
                            step="0.01"
                        >
                    </div>


                    <div class="field">
                        <label for="width">Room Width</label>

                        <input
                            type="number"
                            id="width"
                            placeholder="15"
                            min="0"
                            step="0.01"
                        >
                    </div>

                </div>


                <div class="field">

                    <label for="height">Wall Height</label>

                    <input
                        type="number"
                        id="height"
                        placeholder="8"
                        min="0"
                        step="0.01"
                    >

                </div>


                <div id="wallOptions">

                    <div class="field">

                        <label for="wallSelection">
                            Walls to Paint
                        </label>

                        <select id="wallSelection">
                            <option value="all">
                                All 4 Walls
                            </option>

                            <option value="lengthWalls">
                                Front & Back Walls
                            </option>

                            <option value="widthWalls">
                                Left & Right Walls
                            </option>
                        </select>

                    </div>

                </div>


                <h2 class="section-title">Doors & Windows</h2>


                <div class="two-columns">

                    <div class="field">

                        <label for="doors">
                            Number of Doors
                        </label>

                        <input
                            type="number"
                            id="doors"
                            value="1"
                            min="0"
                            step="1"
                        >

                    </div>


                    <div class="field">

                        <label for="windows">
                            Number of Windows
                        </label>

                        <input
                            type="number"
                            id="windows"
                            value="2"
                            min="0"
                            step="1"
                        >

                    </div>

                </div>


                <div class="two-columns">

                    <div class="field">

                        <label for="doorWidth">
                            Door Width
                        </label>

                        <input
                            type="number"
                            id="doorWidth"
                            value="3"
                            min="0"
                            step="0.01"
                        >

                    </div>


                    <div class="field">

                        <label for="doorHeight">
                            Door Height
                        </label>

                        <input
                            type="number"
                            id="doorHeight"
                            value="7"
                            min="0"
                            step="0.01"
                        >

                    </div>

                </div>


                <div class="two-columns">

                    <div class="field">

                        <label for="windowWidth">
                            Window Width
                        </label>

                        <input
                            type="number"
                            id="windowWidth"
                            value="4"
                            min="0"
                            step="0.01"
                        >

                    </div>


                    <div class="field">

                        <label for="windowHeight">
                            Window Height
                        </label>

                        <input
                            type="number"
                            id="windowHeight"
                            value="4"
                            min="0"
                            step="0.01"
                        >

                    </div>

                </div>


                <h2 class="section-title">Paint Settings</h2>


                <div class="two-columns">

                    <div class="field">

                        <label for="coats">
                            Number of Coats
                        </label>

                        <select id="coats">
                            <option value="1">1 Coat</option>
                            <option value="2" selected>2 Coats</option>
                            <option value="3">3 Coats</option>
                            <option value="4">4 Coats</option>
                        </select>

                    </div>


                    <div class="field">

                        <label for="waste">
                            Waste Allowance
                        </label>

                        <input
                            type="number"
                            id="waste"
                            value="10"
                            min="0"
                            max="100"
                            step="1"
                        >

                        <span class="field-note">
                            Usually 5–15%
                        </span>

                    </div>

                </div>


                <div class="field">

                    <label for="coverage">
                        Paint Coverage
                        <span id="coverageLabel">
                            (sq ft per gallon)
                        </span>
                    </label>

                    <input
                        type="number"
                        id="coverage"
                        value="350"
                        min="1"
                        step="1"
                    >

                    <span class="field-note">
                        Check the paint manufacturer's label for the
                        actual coverage.
                    </span>

                </div>


                <h2 class="section-title">
                    Optional Cost Estimate
                </h2>


                <div class="two-columns">

                    <div class="field">

                        <label for="currency">
                            Currency
                        </label>

                        <select id="currency">

                            <option value="$">USD ($)</option>
                            <option value="£">GBP (£)</option>
                            <option value="A$">AUD (A$)</option>
                            <option value="€">EUR (€)</option>

                        </select>

                    </div>


                    <div class="field">

                        <label for="paintPrice">
                            Price per Gallon/Litre
                        </label>

                        <input
                            type="number"
                            id="paintPrice"
                            placeholder="Optional"
                            min="0"
                            step="0.01"
                        >

                    </div>

                </div>


                <button
                    type="button"
                    class="calculate-button"
                    id="calculateButton"
                >
                    Calculate Paint
                </button>


                <div
                    id="errorMessage"
                    class="error-message"
                ></div>

            </div>


            <!-- =========================
                 RESULT CARD
            ========================== -->

            <div class="paint-card result-card">

                <h2>Your Estimate</h2>

                <p class="result-subtitle">
                    Your estimated paint requirements
                </p>


                <div class="main-result">

                    <span>Recommended Purchase</span>

                    <strong id="recommendedPaint">
                        —
                    </strong>

                </div>


                <div class="result-list">

                    <div class="result-row">
                        <span>Total Wall Area</span>
                        <strong id="wallArea">—</strong>
                    </div>


                    <div class="result-row">
                        <span>Ceiling Area</span>
                        <strong id="ceilingArea">—</strong>
                    </div>


                    <div class="result-row">
                        <span>Door & Window Area</span>
                        <strong id="openingArea">—</strong>
                    </div>


                    <div class="result-row">
                        <span>Paintable Area</span>
                        <strong id="paintableArea">—</strong>
                    </div>


                    <div class="result-row">
                        <span>Paint Required</span>
                        <strong id="paintNeeded">—</strong>
                    </div>


                    <div class="result-row">
                        <span>Estimated Cost</span>
                        <strong id="paintCost">—</strong>
                    </div>

                </div>


                <div class="shopping-list">

                    <h3>🛒 Project Summary</h3>

                    <p id="summaryText">
                        Enter your room measurements to calculate
                        your paint requirements.
                    </p>

                </div>


                <div class="helper-box">

                    <strong>Tip:</strong>
                    Paint coverage varies by product, surface,
                    texture and application method. Always check
                    the manufacturer's coverage information before
                    purchasing paint.

                </div>

            </div>

        </div>

    </div>

</main>


<script>

(function () {

    "use strict";


    /* ==============================
       ELEMENTS
    ============================== */

    const unit =
        document.getElementById("unit");

    const paintArea =
        document.getElementById("paintArea");

    const wallSelection =
        document.getElementById("wallSelection");

    const wallOptions =
        document.getElementById("wallOptions");

    const coverage =
        document.getElementById("coverage");

    const coverageLabel =
        document.getElementById("coverageLabel");

    const calculateButton =
        document.getElementById("calculateButton");

    const errorMessage =
        document.getElementById("errorMessage");


    /* ==============================
       UNIT CHANGE
    ============================== */

    unit.addEventListener("change", function () {

        if (unit.value === "ft") {

            coverage.value = 350;

            coverageLabel.textContent =
                "(sq ft per gallon)";

        } else {

            coverage.value = 10;

            coverageLabel.textContent =
                "(sq m per litre)";

        }

    });


    /* ==============================
       PAINT AREA CHANGE
    ============================== */

    paintArea.addEventListener("change", function () {

        if (paintArea.value === "ceiling") {

            wallOptions.style.display = "none";

        } else {

            wallOptions.style.display = "block";

        }

    });


    /* ==============================
       CALCULATE
    ============================== */

    calculateButton.addEventListener(
        "click",
        calculatePaint
    );


    function calculatePaint() {

        clearError();


        const selectedUnit =
            unit.value;

        const selectedPaintArea =
            paintArea.value;


        const length =
            getNumber("length");

        const width =
            getNumber("width");

        const height =
            getNumber("height");

        const doors =
            getNumber("doors");

        const windows =
            getNumber("windows");

        const doorWidth =
            getNumber("doorWidth");

        const doorHeight =
            getNumber("doorHeight");

        const windowWidth =
            getNumber("windowWidth");

        const windowHeight =
            getNumber("windowHeight");

        const coats =
            getNumber("coats");

        const coverageValue =
            getNumber("coverage");

        const waste =
            getNumber("waste");

        const paintPrice =
            getNumber("paintPrice");


        /* ==============================
           VALIDATION
        ============================== */

        if (
            length <= 0 ||
            width <= 0 ||
            height <= 0
        ) {

            showError(
                "Please enter valid room length, width and wall height."
            );

            return;
        }


        if (coverageValue <= 0) {

            showError(
                "Please enter a valid paint coverage value."
            );

            return;
        }


        if (doors < 0 || windows < 0) {

            showError(
                "Number of doors and windows cannot be negative."
            );

            return;
        }


        /* ==============================
           WALL AREA
        ============================== */

        let wallArea = 0;


        if (selectedPaintArea !== "ceiling") {

            if (wallSelection.value === "all") {

                wallArea =
                    2 * (length + width) * height;

            } else if (
                wallSelection.value === "lengthWalls"
            ) {

                wallArea =
                    2 * length * height;

            } else {

                wallArea =
                    2 * width * height;

            }

        }


        /* ==============================
           CEILING
        ============================== */

        const ceilingArea =
            length * width;


        /* ==============================
           OPENINGS
        ============================== */

        let openingArea = 0;


        if (selectedPaintArea !== "ceiling") {

            const doorArea =
                doors * doorWidth * doorHeight;

            const windowArea =
                windows * windowWidth * windowHeight;

            openingArea =
                doorArea + windowArea;

        }


        /* ==============================
           PAINTABLE AREA
        ============================== */

        let paintableArea = 0;


        if (selectedPaintArea === "walls") {

            paintableArea =
                Math.max(
                    wallArea - openingArea,
                    0
                );

        } else if (
            selectedPaintArea === "ceiling"
        ) {

            paintableArea =
                ceilingArea;

        } else {

            paintableArea =
                Math.max(
                    wallArea - openingArea,
                    0
                ) + ceilingArea;

        }


        /* ==============================
           TOTAL PAINT
        ============================== */

        const paintBeforeWaste =
            (
                paintableArea * coats
            ) / coverageValue;


        const paintWithWaste =
            paintBeforeWaste *
            (1 + waste / 100);


        const recommended =
            Math.ceil(paintWithWaste);


        /* ==============================
           COST
        ============================== */

        let costText = "—";


        if (paintPrice > 0) {

            const totalCost =
                recommended * paintPrice;

            const currency =
                document.getElementById(
                    "currency"
                ).value;

            costText =
                currency +
                totalCost.toLocaleString(
                    "en-US",
                    {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                );

        }


        /* ==============================
           DISPLAY
        ============================== */

        const areaUnit =
            selectedUnit === "ft"
                ? "sq ft"
                : "sq m";


        const paintUnit =
            selectedUnit === "ft"
                ? "gallons"
                : "litres";


        document.getElementById(
            "wallArea"
        ).textContent =
            formatNumber(wallArea) +
            " " +
            areaUnit;


        document.getElementById(
            "ceilingArea"
        ).textContent =
            formatNumber(ceilingArea) +
            " " +
            areaUnit;


        document.getElementById(
            "openingArea"
        ).textContent =
            formatNumber(openingArea) +
            " " +
            areaUnit;


        document.getElementById(
            "paintableArea"
        ).textContent =
            formatNumber(paintableArea) +
            " " +
            areaUnit;


        document.getElementById(
            "paintNeeded"
        ).textContent =
            formatNumber(paintWithWaste) +
            " " +
            paintUnit;


        document.getElementById(
            "recommendedPaint"
        ).textContent =
            recommended +
            " " +
            paintUnit;


        document.getElementById(
            "paintCost"
        ).textContent =
            costText;


        /* ==============================
           SUMMARY
        ============================== */

        document.getElementById(
            "summaryText"
        ).textContent =
            "Based on your measurements, " +
            "we recommend purchasing approximately " +
            recommended +
            " " +
            paintUnit +
            " of paint for " +
            coats +
            " coat" +
            (coats === 1 ? "" : "s") +
            ", including " +
            waste +
            "% waste allowance.";

    }


    /* ==============================
       HELPERS
    ============================== */

    function getNumber(id) {

        const element =
            document.getElementById(id);

        const value =
            parseFloat(element.value);

        return isNaN(value)
            ? 0
            : value;

    }


    function formatNumber(number) {

        return number.toLocaleString(
            "en-US",
            {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
            }
        );

    }


    function showError(message) {

        errorMessage.textContent =
            message;

        errorMessage.style.display =
            "block";

    }


    function clearError() {

        errorMessage.textContent =
            "";

        errorMessage.style.display =
            "none";

    }


})();
</script>

</body>
</html>
