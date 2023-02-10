const menuEmail=document.querySelector('.navbar-email');
const desktopmenu=document.querySelector('.desktop-menu');
const menuburger=document.querySelector('.menu');
const menumobile=document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuburger.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu(){
    desktopmenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    menumobile.classList.toggle('inactive');
}