
const menuNormal = ()=>{
    // ========= main-menu 7  activation
    let menuToggle7 = document.querySelector('.menu-style-7 .menu-toggle');
    let mainMenu7 = document.querySelector('.menu-style-7 .main-menu');
    let menuClose7 = document.querySelector('.menu-style-7 #menu-close');
    let overlay7 = document.querySelector('.overlay-7');

    if(menuToggle7){
        menuToggle7.addEventListener('click', () => {
            menuToggle7.classList.add('active');
            mainMenu7.classList.add('open');
            overlay7.classList.add('open');
        });
    }
    
    if(menuClose7){
        menuClose7.addEventListener('click', () => {
            mainMenu7.classList.remove('open');
            overlay7.classList.remove('open');
            menuToggle7.classList.remove('active');
        });
    }
    
    if(overlay7){
        overlay7.addEventListener('click', () => {
            mainMenu7.classList.remove('open');
            overlay7.classList.remove('open');
            menuToggle7.classList.remove('active');

        });
    }
    
};

setTimeout(() => {
    menuNormal();
}, 2000);