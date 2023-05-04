const choonsik = () => {
    // gnb
    const barMenu = document.querySelector(".barMenu");
    const gnbWrapper = document.querySelector(".gnb-wrapper");

    const closeGnb = document.querySelector(".closeGnb");

    barMenu.addEventListener("click", () => {
        gnbWrapper.style.display = "block";
    })

    closeGnb.addEventListener("click", () => {
        gnbWrapper.style.display = "none";
    })
}


export default choonsik