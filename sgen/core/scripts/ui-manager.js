// Theme manager
var darkThemeToggle = document.getElementById("dark-mode-toggle");

var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./styles/dark-mode.css";

function changeTheme(useDarkTheme) {
    if (useDarkTheme) {
        document.getElementsByTagName("head")[0].appendChild(link);
    } else {
        document.getElementsByTagName("head")[0].removeChild(link);
    }
}

function parseType(type) {
    return typeof type == "string" ? JSON.stringify(type) : type;
}

document.body.onload = function() {
    darkThemeToggle.checked = JSON.parse(localStorage.getItem("useDarkTheme"));
    changeTheme(darkThemeToggle.checked);
}

darkThemeToggle.onchange = function() {
    localStorage.setItem("useDarkTheme", parseType(darkThemeToggle.checked));
    changeTheme(darkThemeToggle.checked);
}