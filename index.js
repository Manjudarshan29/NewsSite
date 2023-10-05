
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

const newsHeadlines = [
    "India-Canada Tussle: New Delhi May Revoke OCI Status of 'Troublemakers', Say Govt Sources",
    "Parul Chaudhary, Annu Rani clinch gold in women's 5000m and javelin throw",
    "Magnitude 6.2 Earthquake Hits Nepal, Strong Tremors Felt in Delhi-NCR",
];

const tickerContent = document.querySelector(".ticker-content");
function updateTicker() {
    tickerContent.innerHTML = newsHeadlines.join(" | "); 
}

updateTicker();
setInterval(updateTicker, 10000); 

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // You can send the form data to a server or perform other actions here
    alert('Message sent successfully!');
    contactForm.reset();
});

