// Theme manager
var darkThemeToggle = document.getElementById("dark-mode-toggle");

var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./styles/dark-mode.css";

darkThemeToggle.addEventListener("change", function() {
    // alert(darkThemeToggle.checked); // For testing
    if (darkThemeToggle.checked) {
        document.getElementsByTagName("head")[0].appendChild(link);
    } else {
        document.getElementsByTagName("head")[0].removeChild(link);
    }
})