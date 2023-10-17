const choonsik = () => {
    const barMenu = document.querySelector(".barMenu");
    const gnbWrapper = document.querySelector(".gnb-wrapper");
    const btnPrev = document.querySelector(".choonsik-condition-btn.btn-prev");
    const btnNext = document.querySelector(".choonsik-condition-btn.btn-next");
    const closeGnb = document.querySelector(".closeGnb");

    barMenu.addEventListener("click", () => {
        gnbWrapper.style.display = "block";        
    });
    closeGnb.addEventListener("click", () => {
        gnbWrapper.style.display = "none";            
    });


    function disableResizing() {
        const images = document.querySelectorAll('img');
        images.forEach((image) => {
            image.style.maxWidth = '100%';
            image.style.height = 'auto';
        });    
       
        const wrappers = document.querySelectorAll('body');
        wrappers.forEach((wrapper) => {
          wrapper.style.maxWidth = '100%';
          wrapper.style.height = 'auto';
        });        
    }
    window.addEventListener('load', disableResizing);
}


export default choonsik