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
}

export default index