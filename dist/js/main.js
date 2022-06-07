const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.menu-button-burger');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item');
const header = document.querySelector('header');

let showMenu = false;
menuButton.addEventListener('click', toggleMenu);
navItems.forEach(item => item.addEventListener('click', toggleMenuitem));
window.addEventListener('scroll', toggleNavColor);

function toggleMenu () {
    if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}


function toggleNavColor () {
    if (window.scrollY >= 4) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function toggleMenuitem () {
    if ( showMenu ) {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

function sendEmail () {
    Email.send({
        SecureToken : "aa2168f1-2e61-40d9-92ea-4ef62a53f115",
        To : 'amanyamartin05@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById('subject').value,
        Body : `My name is ${document.getElementById('name').value}, am contacting you about; ${document.getElementById('message').value}. Contact me on ${document.getElementById('telephone-number').value}.`
    }).then(
      message => alert(message)
    );
}