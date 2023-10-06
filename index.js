
function updateDateTime() {
    const dateTimeElement = document.getElementById("date-time");
    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
    const formattedDateTime = now.toLocaleDateString("en-US", options);
    dateTimeElement.textContent = formattedDateTime;
}
updateDateTime();
setInterval(updateDateTime, 1000);
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


searchButton.addEventListener("click", performSearch);
function performSearch() {
    const query = searchInput.value.trim();
    if (query !== "") {
        alert("Searching for: " + query);
    } else {
        alert("Please enter a search query.");
    }
}
searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        performSearch();
    }
});

// Define an array of news headlines
const newsHeadlines = [
    "7 dead, over 40 injured in massive building fire in Mumbai's Goregaon West",
    "Devon Conway, Rachin Ravindra fire dazzling tons as New Zealand stun defending champions England in opener",
    "RBI keeps repo rate unchanged at 6.5%",
];

const tickerContent = document.querySelector(".ticker-content");
function updateTicker() {
    tickerContent.innerHTML = newsHeadlines.join(" | "); // Separate headlines with a pipe (|) symbol
}
updateTicker();
setInterval(updateTicker, 10000); // 10000 milliseconds = 10 seconds


const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let slideIndex = 0;

function showSlide(index) {
    if (index < 0) {
        slideIndex = slider.children.length - 1;
    } else if (index >= slider.children.length) {
        slideIndex = 0;
    }

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

prevButton.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});

nextButton.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});

// Automatically advance the slider
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Change the time interval (in milliseconds) for automatic sliding
const slideInterval = setInterval(autoSlide, 4000);

// Pause automatic sliding on hover
slider.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
});

// Resume automatic sliding on mouse leave
slider.addEventListener("mouseleave", () => {
    slideInterval = setInterval(autoSlide, 4000);
});

// Show the initial slide
showSlide(slideIndex);


