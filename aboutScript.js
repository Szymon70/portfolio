document.querySelector(".aboutButton").addEventListener("click", function() {
    const aboutSection = document.querySelector(".about");
    if (aboutSection.style.display === "none" || aboutSection.style.display === "") {
        aboutSection.style.display = "block";
    } else {
        aboutSection.style.display = "none";
    }
});