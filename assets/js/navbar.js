// imagem pre carregada

const logoBranco = new Image();
logoBranco.src = "assets/imagens/logo/logoBranco.png";

const logoPreto = new Image();
logoPreto.src = "assets/imagens/logo/logoPreto.png";
 
 const header = document.getElementById("header");
        const logo = document.getElementById("logo");

        function atualizarHeader(){
            if(menuNavbar.classList.contains("show")){
                aplicarTemaEscuro();
                btnToggle.classList.add("hidden");
            }else{
                if(window.scrollY > 50){
                    aplicarTemaClaro();
                }else{
                    aplicarTemaEscuro();
                }
            }
        }

        window.addEventListener("scroll", ()=>{
            atualizarHeader();
        })

        function aplicarTemaClaro(){
            header.classList.add("branco");
            logo.src = logoPreto.src;
        }

        function aplicarTemaEscuro(){
            header.classList.remove("branco");
            logo.src = logoBranco.src;
        }

        // window.addEventListener("scroll", ()=>{
        //     if(window.scrollY > 50){
        //         aplicarTemaClaro();
        //     } else{
        //         aplicarTemaEscuro();
        //     }
        // })

        const btnToggle = document.getElementById("btn-toggle");
        const menuNavbar = document.getElementById("menuNavbar");
        const overlayToggle = document.getElementById("overlayToggle");
        const btnToggleMenu = document.getElementById("btn-toggleMenu");


        btnToggle.addEventListener("click", abrirToggle);
        btnToggleMenu.addEventListener("click", fecharToggle);

        function abrirToggle(){
            menuNavbar.classList.toggle("show");
            overlayToggle.classList.toggle("show");
            btnToggle.classList.add("hidden");
            menuNavbar.classList.add("sombra");
            document.body.classList.add("travar");
            aplicarTemaEscuro();
        }

        function fecharToggle(){
            menuNavbar.classList.remove("show");
            menuNavbar.classList.remove("sombra");
            overlayToggle.classList.remove("show");
            btnToggle.classList.remove("hidden");
            menuNavbar.classList.remove("sombra");
            document.body.classList.remove("travar");

            atualizarHeader();
        }


        /// evento fechar no click

        window.addEventListener("click",(e)=>{
            if(!menuNavbar.contains(e.target) && !btnToggle.contains(e.target) && menuNavbar.classList.contains("show")){
                fecharToggle();
            }
        })

        window.addEventListener("keydown", (e)=>{
            if(e.key === "Escape" && menuNavbar.classList.contains("show")){
                fecharToggle();
            }
        })

        // let positionInicial = window.scrollY;

        // window.addEventListener("scroll", ()=>{
        //     let positionAtual = window.scrollY;

        //     let diferenca = Math.abs(positionAtual - positionInicial);

        //     if(diferenca > 1){
        //         fecharToggle();
        //     }

        //     positionInicial = positionAtual;
        // })


        const links = document.querySelectorAll("#menuNavbar a");

        links.forEach(item =>{
            item.addEventListener("click", ()=>{
                fecharToggle();
            })
        });