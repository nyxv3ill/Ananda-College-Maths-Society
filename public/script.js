let navToggle = document.getElementById("navToggle");
let nav = document.getElementById("nav");

navToggle.addEventListener("click", (e)=>{
    e.preventDefault();
    if(nav.className != "toggled"){
        nav.className = "toggled";
    } else{
        nav.className = "";
    }
})