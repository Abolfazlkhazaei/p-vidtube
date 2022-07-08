let menuicon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");


menuicon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
}