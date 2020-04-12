document.querySelector("body").addEventListener("click", (event) => {
    document.querySelector("body").style.backgroundColor = "red";
});

document.querySelector("body").addEventListener("dblclick", (event) => {
    document.querySelector("body").style.backgroundColor = "blue";
})

window.addEventListener("resize", (event) => {
    document.querySelector("body").style.color = "purple";
})

document.querySelector("header a").addEventListener("mouseover", (event) => {
    document.querySelector("header a").style.color = "orange";
    event.preventDefault()
})

document.querySelector("header a").addEventListener("mouseleave", (event) => {
    document.querySelector("header a").style.color = "black";
    
})

window.addEventListener("load", (event) => {
    document.querySelector("header img").style.transform = "rotate(180deg)";
})

window.addEventListener("keydown", (event) => {
    document.querySelector("header img").style.transform = "rotate(360deg)";
})

window.addEventListener("scroll", (event) => {
    document.querySelector("header h1").style.color = "green";
})

window.addEventListener("mousemove", (event) => {
    document.querySelector("header h2").style.color = "yellow";
})

window.addEventListener("mousedown", (event) => {
    document.querySelector(".text-content h2").style.color = "grey";
    event.stopPropagation();
})