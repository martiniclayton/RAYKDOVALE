const header = document.getElementById('header');
const logo = document.getElementById('logo');
let logoBranco = true;
let scroll = false;

window.addEventListener("scroll", mudarnav)

function mudarnav(){
    if(window.scrollY > 50){
        header.classList.add("scroll");
        logo.src = "img/logoPreto.png"
        scroll = true
        logoBranco = false;
    } else{
        header.classList.remove("scroll");
        logo.src = "img/logoBranco.png"
        scroll = false;
        logoBranco = true;
    }
}



///toggle

const btnToggle = document.getElementById("btn-toggle");

btnToggle.addEventListener("click", eventoToggle)
function eventoToggle(){
    if(scroll){

    } else{
        header.classList.toggle("eventoToggle")
        if(logoBranco){
            logo.src = "img/logoPreto.png"
            logoBranco = false;
        } else{
            logo.src = "img/logoBranco.png"
            logoBranco = true;
        }
    }
}