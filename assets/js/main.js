const bannerCookie = document.getElementById("cookie");
        const btnAceitar = document.getElementById("btn-act");
        const btnRecusar = document.getElementById("btn-recusar");


        setTimeout(()=>{
            if (bannerCookie && !localStorage.getItem("cookieConsent")) {
                bannerCookie.style.display = "flex";
            }
    
            if (btnAceitar && bannerCookie) {
                btnAceitar.addEventListener("click", () => {
                    localStorage.setItem("cookieConsent", "accepted");
                    bannerCookie.style.display = "none";
                });
            }
    
            if (btnRecusar && bannerCookie) {
                btnRecusar.addEventListener("click", () => {
                    localStorage.setItem("cookieConsent", "recused");
                    bannerCookie.style.display = "none";
                });
            }
        }, 1000)