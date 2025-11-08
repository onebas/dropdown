import "./styles.css";

const dropdownMenus = document.querySelectorAll(".dropdown-container");
for(let dropdown of dropdownMenus){
    dropdown.addEventListener("mouseenter", showMenu);
    dropdown.addEventListener("mouseleave", hideMenu);
}

function showMenu(event){
    const menu = event.target.querySelector(".dropdown");
    menu.classList.toggle("hidden");
    menu.classList.toggle("visible");
}

function hideMenu(event){
    const menu = event.target.querySelector(".dropdown");
    menu.classList.toggle("hidden");
    menu.classList.toggle("visible");
}