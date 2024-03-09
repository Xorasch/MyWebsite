const modalBtn = document.querySelector('.vimeo_btn');
const modal = document.querySelector('.modal_bg');
const nav = document.querySelector('.s-header');
const body = document.querySelector('body');
const vid = document.querySelector('.hero_video');

//Button Click Event
modalBtn.addEventListener('click', () =>  {
    //Vimeo embed
    modal.innerHTML =
    '<div class="vimeo_modal" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/886542427?h=6a0e9687e3&autoplay=1&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>'

    //Disable scroll
    body.classList.add("disable_scrolling")

    //Pause Video
    vid.pause();

    //Show Modal
    modal.style.display = 'flex';

    //Smooth opacity transition
    setTimeout(() => {
        modal.style.opacity = "1";
        //Hide Menu
        nav.style.opacity = "0"
    }, 50);
});

//Modal Background Click Event
modal.addEventListener('click', () => {
    //remove embed html so video doesnt play in background
    modal.innerHTML = '';

    //Enable scroll
    body.classList.remove("disable_scrolling")

    //Play Video
    vid.play();

    //show menu
    nav.style.opacity = '1'

    //smooth opacity transition
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 450);
});