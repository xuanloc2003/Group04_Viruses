//nav bar transition
const nav = document.querySelector('.nav-bar');
let currentScrollY = window.scrollY;
var nav_hidden =
window.addEventListener("scroll",  function(){
    if(currentScrollY < window.scrollY){
        nav.classList.add("nav-hidden");
        sidebar.classList.remove("sidebar-translate");
    }else{
        nav.classList.remove("nav-hidden");
        sidebar.classList.add("sidebar-translate");
    }
    currentScrollY = window.scrollY;
});
console.log(currentScrollY)


//sidebar animation
const sidebar = document.querySelector('.sidebar');
const content= document.querySelector('#content');
var sidebar_hidden= window.addEventListener("scroll", function(){
    if(currentScrollY >= 700){
        sidebar.classList.remove("sidebar-hidden");
        sidebar.classList.add("sidebar-show");
        //content translateX
        content.classList.add("content-repostn");
    }else{
        sidebar.classList.add("sidebar-hidden");
        sidebar.classList.remove("sidebar-show");
        //content
        content.classList.remove("content-repostn");
    }
});
