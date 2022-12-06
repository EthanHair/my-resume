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

function playBackgroundMusic() {
    let canPlayBackgroundMusic = window.confirm("This website would like to play some soft background music")

    if (canPlayBackgroundMusic)
    {
        const musicPlayer = document.getElementById("music-player");
        musicPlayer.play();
    }
}



// Potential background effect
// document.body.addEventListener("mousemove", evt => {
//     const mouseX = evt.clientX;
//     const mouseY = evt.clientY;
  
//     gsap.set(".cursor", {
//       x: mouseX,
//       y: mouseY });
  
  
//     gsap.to(".shape", {
//       x: mouseX,
//       y: mouseY,
//       stagger: -0.1 });
  
//   });