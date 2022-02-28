/*BARRA MENU LATERAL MOBIL*/ 

x = false;
ScrollReveal('');
document.querySelector(".menu-btn").addEventListener("click", () => {
    if (x == true) {
        x = false
        console.log('hello world');
        document.querySelector(".nav-menu").classList.toggle("show");
    }
    else{
    x = true;
    console.log('hello world');
    document.querySelector(".nav-menu").classList.toggle("show");
     }   
});


    document.querySelector(".container").addEventListener("click", () => {
       if (x==true) { 
        document.querySelector(".nav-menu").classList.toggle("show");
        x = false;
    }
    });

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards' , {delay:450} );
ScrollReveal().reveal('.cards-banner-one', { delay:450} );
ScrollReveal().reveal('.cards-banner-two', { delay: 450 });

ScrollReveal().reveal('.showcase', { reset: true });
ScrollReveal().reveal('.news-cards', { reset: true });
ScrollReveal().reveal('.cards-banner-one', { reset: true });
ScrollReveal().reveal('.cards-banner-two', { reset: true });