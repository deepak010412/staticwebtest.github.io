const nav = document.querySelector('nav');
const toggle_btn = document.getElementById('toggle-btn');
const content = document.querySelector('section');

toggle_btn.onclick = function() {
    nav.classList.toggle('hide');
    content.classList.toggle('expand');
}

const body = document.querySelector('body');
const byModeBtn = document.getElementById('byModeBtn');
const byModeIcon = document.getElementById('byModeIcon');
const sectionHeader = document.querySelector('section h1');

byModeBtn.onclick = function() {
    byModeIcon.classList.toggle("fa-sun-o");
    byModeIcon.classList.toggle("fa-moon-o");
    body.classList.toggle("dark-mode");
    sectionHeader.classList.toggle("dark-mode");

}