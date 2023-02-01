const allSections = document.querySelectorAll('.main-content');
const sections = document.querySelectorAll('.section');
const sectionControls = document.querySelectorAll('.controlsection');
const sectionBtn = document.querySelectorAll('.control');

function PageTransitions(){
    //btn click active class
    for(let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }
}

PageTransitions();