const menuButton = document.getElementById("menu-button");
const links = document.getElementById("links");
const closeButton = document.getElementById("close-button");
const year = document.getElementById("year");
const topButton = document.getElementById("top-button");

let firstClick = true;

function closeMenu() {
    const menu = document.getElementById("side-navbar");
    
    if (menu.classList.contains("hidden"))
    {
        menu.classList.remove("hidden");
    }
    else {
        menu.classList.add("hidden");
    }
}

menuButton.addEventListener("click", closeMenu);

links.addEventListener("click", closeMenu);

closeButton.addEventListener("click", closeMenu);

topButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("click", (e) => {
    if (firstClick)
    {
        playBackgroundMusic();
    }
    firstClick = false;

	let elementId = e.target.id;

    if (elementId != "side-navbar" && elementId != "menu-button")
    {
        const menu = document.getElementById("side-navbar");

        if (!menu.classList.contains("hidden"))
        {
            menu.classList.add("hidden");
        }
    }
});

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        topButton.style.display = "flex";
    }
    else
    {
        topButton.style.display = "none";
    }
}

year.innerHTML = new Date().getFullYear();