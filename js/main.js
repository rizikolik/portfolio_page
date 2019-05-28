const button      =document.querySelector(".menu-icon");
const menu        =document.querySelector(".menu");
const menuNav     =document.querySelector(".menu-nav");
const brand       =document.querySelector(".menu-brand");
const navItem     =document.querySelectorAll(".nav-item");

let showmenu=false;

button.addEventListener("click",getMenu);
function getMenu (){
    if(!showmenu){
      button.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      brand.classList.add("show");
      navItem.forEach(item => item.classList.add('show'));
      showmenu=true;
    }else{
      button.classList.remove("close");
      menu.classList.remove("show");
      brand.classList.remove("show");
      menuNav.classList.remove("show");
      navItem.forEach(item => item.classList.remove('show'));
      showmenu =false;
        
    };
      
    
};
 