// ================Toggle icon navbar================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// ============Scroll sections ative link============
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='  + id +  ']').classList.add('active');
            });
        };
    });
    // ==============Sticky navbar===============
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // ==============remove Toggle icon navbar================

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ==================Dark Mode======================

let btn = document.getElementById("btn");
    let btnText = document.getElementById("btnText");
    let btnIcon = document.getElementById("btnIcon");
    
    btn.onclick = function(){
        document.body.classList.toggle("dark-tema");

        if(document.body.classList.contains("dark-tema")){
            btnIcon.src = "Imagens/sun.png";
            btnText.innerHTML = "Light";
        }else{
            btnIcon.src = "Imagens/moon.png";
            btnText.innerHTML = "Dark";
        }
}

//================Script das Skills==================

var tablinks = document.getElementsByClassName("tab-links")
    var tabcontents = document.getElementsByClassName("tab-contents")

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
}

// ================Scrpit do contato=================

 const msgEnv = () => {
     const span = document.querySelector('msg');
 }

const enviarform = (Event) => {
    Event.preventDefault();
    msgEnv()

    const name = document.querySelector('input[name=name]').value; 
    const email = document.querySelector('input[name=email]').value;
    const massage = document.querySelector('textarea[name=massage]').value;
    const msg = document.getElementById("msg")

    fetch('https://api.sheetmonkey.io/form/fYFaE6CbwPrHM7BNcpKGHA', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, massage })
    }).then(Response => {
        msg.innerHTML = "Mensagem enviada!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
}

document.querySelector('form').addEventListener('submit', enviarform);