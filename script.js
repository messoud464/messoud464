l("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0 10px 30px rgba(255, 99, 71, 0.9)";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "0 5px 20px rgba(255, 99, 71, 0.6)";
    });
});
// Event listener for hover effects on all buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0 10px 30px rgba(255, 99, 71, 0.8)";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "0 5px 15px rgba(255, 99, 71, 0.4)";
    });
});

// Search bar functionality
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", function() {
    let searchQuery = searchBar.value.toLowerCase();
    console.log(`Searching for: ${searchQuery}`); // You can replace this with actual search functionality

    // If you have an array of apps, you can filter them here and display relevant results.
});

// Language select functionality
document.getElementById("language-select").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    alert(`You have selected: ${selectedLanguage}`);
});

