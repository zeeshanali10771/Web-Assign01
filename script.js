let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const typed = new Typed('.multiple-text',{
     strings:['Frontend Developer','SQA Engineer', 'Data Analyst','Mern Stack Developer','Database Engineer','Java/-fx Expert'],
     typeSpeed:100,
     backSpeed:100,
     backDelay:1000,
     loop:true,
});