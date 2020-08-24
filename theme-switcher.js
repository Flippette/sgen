var themeSwitchButton = document.getElementById("theme-switcher");

link = document.createElement("link");
link.rel = "stylesheet";
link.href = "./dark-core.css";
link.id = "dark-core";

function parseItem(item) {
    return typeof item == "string" ? JSON.stringify(item) : item;
}

function changeTheme(useDarkTheme) {
    if (useDarkTheme) {
        document.getElementsByTagName("head")[0].appendChild(link);
    } else {
        document.getElementsByTagName("head")[0].removeChild(link);
    }
}

document.body.onload = function () {
    changeTheme(JSON.parse(localStorage.getItem("useDarkCore")));
}

themeSwitchButton.onclick = function() {
    var darkCoreStyles = document.querySelectorAll("head #dark-core");
    // if (Object.keys(darkCoreStyles).length == 0) {
    //     localStorage.setItem("useDarkCore", parseItem(true));
    // } else {
    //     localStorage.setItem("useDarkCore", parseItem(false));
    // }
    // changeTheme(JSON.parse(localStorage.getItem("useDarkCore")));

    var useDarkCore = Object.keys(darkCoreStyles).length == 0;

    changeTheme(useDarkCore);
    localStorage.setItem("useDarkCore", parseItem(useDarkCore));
}