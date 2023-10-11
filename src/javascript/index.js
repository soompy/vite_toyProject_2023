const index = () => {
    window.addEventListener('scroll', function () {
        var scroll = window.scrollY;
        var section01 = document.querySelector('._01');
        var contTitleBox01 = document.querySelector('._01 .cont-title-box');
        
        var sectionTop01 = section01.getBoundingClientRect().top + window.scrollY;
        
        if (scroll >= sectionTop01) {
            section01.classList.add('stickyOn');
            contTitleBox01.classList.add('fade-in');
        } else {
            section01.classList.remove('stickyOn');
            contTitleBox01.classList.remove('fade-in');
        }
    });

    var btnEntry = document.querySelector(".area-common._04 .btn");
    btnEntry.addEventListener("click", function() {
        var linkUrl = "./day-choonsik.html";
        window.location.href = linkUrl;
    });
}

export default index