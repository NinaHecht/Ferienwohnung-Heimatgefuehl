const show = document.getElementById('show-platforms');
const platforms = document.getElementById('platforms');
const hide = document.getElementById('hide-platforms');

show.addEventListener('click', function(){
    platforms.classList.add('visible');
    if(window.getComputedStyle(show).display === 'block') show.style.display = 'none';
    if(window.getComputedStyle(hide).display === 'none') hide.style.display = 'block';
});

show.addEventListener('keydown', function(event){
    if(event.keyCode === 13){
        platforms.classList.add('visible');
        if(window.getComputedStyle(show).display === 'block') show.style.display = 'none';
        if(window.getComputedStyle(hide).display === 'none') hide.style.display = 'block';
    }
});

hide.addEventListener('click', function(){
    if(window.getComputedStyle(hide).display === 'block') hide.style.display = 'none';
    if(window.getComputedStyle(show).display === 'none') show.style.display = 'block';
    platforms.classList.remove('visible');
});

hide.addEventListener('keydown', function(){
    if(event.keyCode === 13){
        if(window.getComputedStyle(hide).display === 'block') hide.style.display = 'none';
        if(window.getComputedStyle(show).display === 'none') show.style.display = 'block';
        platforms.classList.remove('visible');
    }
});