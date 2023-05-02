const body = document.querySelector("body");
const toggle = document.getElementById("toggle");


const isLightMode = localStorage.getItem("lightMode") === "true";

if (isLightMode) {
   body.classList.add("active");
   toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
   toggle.classList.toggle("active");
   body.classList.toggle("active");
   localStorage.setItem("lightMode", !isLightMode);
});