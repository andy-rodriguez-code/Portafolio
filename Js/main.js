let menuicono=document.querySelector("#icono__menu")
let navbar=document.querySelector(".navbar__menu")

menuicono.onclick =()=>{
    menuicono.classList.toggle('bx')
    navbar.classList.toggle('active')
}


let secciones=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
    secciones.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 200;
        let heigth=sec.offsetHeight;
        let id=sec.getAttribute('id');
        if(top>= offset && top< offset + heigth ){
            navlinks.forEach(link=>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
         };
    });
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100)
}