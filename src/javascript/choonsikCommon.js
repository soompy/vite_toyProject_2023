const choonsik = () => {
    // gnb
    const barMenu = document.querySelector(".barMenu");
    const gnbWrapper = document.querySelector(".gnb-wrapper");
    const btnPrev = document.querySelector(".choonsik-condition-btn.btn-prev");
    const btnNext = document.querySelector(".choonsik-condition-btn.btn-next");

    const closeGnb = document.querySelector(".closeGnb");

    barMenu.addEventListener("click", () => {
        gnbWrapper.style.display = "block";
        btnPrev.style.display = "none";
        btnNext.style.display = "none";
    })

    closeGnb.addEventListener("click", () => {
        gnbWrapper.style.display = "none";    
        btnPrev.style.display = "block";
        btnNext.style.display = "block";
    })
}


export default choonsik