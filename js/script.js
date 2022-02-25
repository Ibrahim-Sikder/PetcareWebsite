// navbar 

const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('.nav');
function toggleNav(){
   nav.classList.toggle('active')
   navToggler.classList.toggle('active');
}

navToggler.addEventListener('click', toggleNav)

// hide the navbar by clicking

document.addEventListener('click', (event) =>{
    const isclickInsideNave = nav.contains(event.target);
    const isClickInsideNavToggler = navToggler.contains(event.target);

    if(!(isclickInsideNave || isClickInsideNavToggler ) && nav.classList.contains('active')){
        toggleNav();
    }

})

// theme lightdark
function themelightDark(){
    const switcherBtn = document.querySelector('js-switcher-btn');
    const icon = document.querySelector('i');
    function changeIcon(){
        if(document.body.classList.contains('dark')){
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }else{
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    switcherBtn.addEventListener('click', () =>{
        document.body.classList.toggle('dark')
        changeIcon();
        if(document.body.classList.contains('dark')){
            localStorage.setItem('theme', 'dark');
        }
        else{
            localStorage.setItem('theme', 'dark');
        }
    });


    changeIcon();

}
themelightDark();