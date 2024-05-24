
window.addEventListener("DOMContentLoaded", function() { 
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme == 'Dark'){
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
})

function applyDarkTheme(){
    const selectedTheme = document.querySelector('#change-theme');
    selectedTheme.href = '/CSS/Dark-Theme.css';
    document.querySelector('#theme').checked = true;
    document.querySelector('.theme-img').src = '/Icons/moon.png'
    // document.querySelector('.img-theme-changer').src = 'Icons/sun.png'
}


function applyLightTheme(){
    const selectedTheme = document.querySelector('#change-theme');
    selectedTheme.href = '/CSS/Light-Theme.css';
    document.querySelector('#theme').checked = false;
    document.querySelector('.theme-img').src = '/Icons/sun.png'

    // document.querySelector('.img-theme-changer').src = 'Icons/moon.png'
}


const mode = document.querySelector('#theme');
mode.addEventListener('change', function() {
    const themeSelect = document.querySelector('#change-theme');
    if (mode.checked) {
        localStorage.setItem('theme' , 'Dark');
        applyDarkTheme();
    } else {
        localStorage.setItem('theme' , 'Light');
        applyLightTheme();
    }
});

