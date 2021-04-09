if (localStorage.theme === 'dark' || (!'theme' in localStorage && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.add('dark')
    const btnClass = document.getElementById('btnShift')
    btnClass.classList.toggle('translate-x-6');
} else if (localStorage.theme === 'dark') {
    document.querySelector('html').classList.add('dark')
}

document.getElementById('switchTheme').addEventListener('click', function(){
const btnClass = document.getElementById('btnShift')
btnClass.classList.toggle('translate-x-6');

let htmlClasses = document.querySelector('html').classList;

if(localStorage.theme == 'dark') {     
    htmlClasses.remove('dark');
    localStorage.removeItem('theme')
}

else {
    htmlClasses.add('dark');
    localStorage.theme = 'dark';
}
});