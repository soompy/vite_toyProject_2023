const choonsik = () => {
    const barMenu = document.querySelector(".barMenu");
    const gnbWrapper = document.querySelector(".gnb-wrapper");
    const btnPrev = document.querySelector(".choonsik-condition-btn.btn-go-first");
    const btnNext = document.querySelector(".choonsik-condition-btn.btn-next");
    const closeGnb = document.querySelector(".closeGnb");

    barMenu.addEventListener("click", () => {
        gnbWrapper.style.display = "block";
        btnPrev.style.display = "none";
        btnNext.style.display = "none";
    });
    closeGnb.addEventListener("click", () => {
        gnbWrapper.style.display = "none";    
        btnPrev.style.display = "block";
        btnNext.style.display = "block";
    });


    function disableResizing() {
        const images = document.querySelectorAll('img');
        images.forEach((image) => {
            image.style.maxWidth = '100%';
            image.style.height = 'auto';
        });    

        const wrappers = document.querySelector(body);
        wrappers.forEach((wrapper) => {
          wrapper.style.maxWidth = '100%';
          wrapper.style.height = 'auto';
        });
    }
    window.addEventListener('load', disableResizing);


    let maxScrollValue;
    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }
    window.addEventListener('resize', resizeHandler);
    resizeHandler();


    const popupDim = document.querySelector(".dimm");
    const alertPopup = document.querySelector(".alert-popup");
    
    popupDim.classList.add("show");               
    alertPopup.classList.add("show");   
    
    setTimeout(() => {
        popupDim.classList.remove("show");
        alertPopup.classList.remove("show");
    }, 3000);
}


export default choonsik