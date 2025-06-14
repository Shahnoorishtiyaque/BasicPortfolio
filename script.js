let toggleBtn = document.getElementById("themeIcon");

toggleBtn.onclick = function () {
    document.body.classList.toggle("dark");

    // Swap icon based on current mode
    if (document.body.classList.contains("dark")) {
        toggleBtn.src = "images/sun.svg";
    } else {
        toggleBtn.src = "images/moon.svg";
    }
};
