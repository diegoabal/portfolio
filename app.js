const allSections = document.querySelector('.main-content');
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
    //Sections active
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id) {
            //remove selected btn
            sectionControls.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');

        }
    } )

}

PageTransitions();