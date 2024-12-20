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

