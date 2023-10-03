
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

