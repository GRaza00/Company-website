const humbarger = document.querySelector(".humbarger");
const nav_links = document.querySelector(".nav-links")

humbarger.addEventListener("click",(e)=>{
    nav_links.classList.toggle("active")
})
