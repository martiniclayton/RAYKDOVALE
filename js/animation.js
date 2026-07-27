const header = document.getElementById("header");
        const logo = document.getElementById("logo");
        const btnToggle = document.getElementById("btn-toggle");
        const menuNavbar = document.getElementById("menuNavbar");

        function mostrarNavBranco(){
            header.classList.add("branco");
            logo.src = "img/logoPreto.png"
        }

        function mostrarNavTransparente(){
            header.classList.remove("branco");
            logo.src = "img/logoBranco.png"
        }

        window.addEventListener("scroll", ()=>{
            if(scrollY > 50){
                mostrarNavBranco();
            } else{
                if(!navAberto){
                    mostrarNavTransparente();
                }
            }
            
        })

        btnToggle.addEventListener("click", btnToggleClick);

        let navAberto = false;

        function btnToggleClick(){

            if(navAberto){
                if(window.scrollY < 50){
                    mostrarNavTransparente();
                }
                menuNavbar.classList.remove("menu-opacity")
                navAberto = false;
            } else{
                if(scrollY < 50){
                    mostrarNavBranco();
                }
                menuNavbar.classList.add("menu-opacity")
                navAberto = true;
            }
        }