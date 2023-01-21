const toggleBackground = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".js-themeName");

    body.classList.toggle("brightTheme");
    themeName.innerText = body.classList.contains("brightTheme") ? "dark" : "bright";
};

const init = () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", toggleBackground);
};

init();