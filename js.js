document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.card');
ScrollReveal().reveal('.Mercurio', { delay: 500 });
ScrollReveal().reveal('.Venus', { delay: 500 });
ScrollReveal().reveal('.Tierra', { delay: 500 });
ScrollReveal().reveal('.Marte', { delay: 500 });
ScrollReveal().reveal('.Jupiter', { delay: 500 });
ScrollReveal().reveal('.Saturno', { delay: 500 });
ScrollReveal().reveal('.Urano', { delay: 500 });
ScrollReveal().reveal('.Neptuno', { delay: 500 });

/*Mercurio*/
const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}
/*Venus*/
const buttonPrev2 = document.getElementById('button-prev2');
const buttonNext2 = document.getElementById('button-next2');
const track2 = document.getElementById('track2');
const slickList2 = document.getElementById('slick-list2');
const slick2 = document.querySelectorAll('.slick2');

const slickWidth2 = slick2[0].offsetWidth;

buttonPrev2.onclick = () => Move2(1);
buttonNext2.onclick = () => Move2(2);

function Move2(value) {
    const trackWidth = track2.offsetWidth;
    const listWidth = slickList2.offsetWidth;

    track2.style.left == "" ? leftPosition = track2.style.left = 0 : leftPosition = parseFloat(track2.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track2.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track2.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
} 

/*Tierra*/
const buttonPrev3 = document.getElementById('button-prev3');
const buttonNext3 = document.getElementById('button-next3');
const track3 = document.getElementById('track3');
const slickList3 = document.getElementById('slick-list3');
const slick3 = document.querySelectorAll('.slick3');

const slickWidth3 = slick3[0].offsetWidth;

buttonPrev3.onclick = () => Move3(1);
buttonNext3.onclick = () => Move3(2);

function Move3(value) {
    const trackWidth = track3.offsetWidth;
    const listWidth = slickList3.offsetWidth;

    track3.style.left == "" ? leftPosition = track3.style.left = 0 : leftPosition = parseFloat(track3.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track3.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track3.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
} 

/*Marte*/
const buttonPrev4 = document.getElementById('button-prev4');
const buttonNext4 = document.getElementById('button-next4');
const track4 = document.getElementById('track4');
const slickList4 = document.getElementById('slick-list4');
const slick4 = document.querySelectorAll('.slick4');

const slickWidth4 = slick4[0].offsetWidth;

buttonPrev4.onclick = () => Move4(1);
buttonNext4.onclick = () => Move4(2);

function Move4(value) {
    const trackWidth = track4.offsetWidth;
    const listWidth = slickList4.offsetWidth;

    track4.style.left == "" ? leftPosition = track4.style.left = 0 : leftPosition = parseFloat(track4.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track4.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track4.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
} 

/*Jupiter*/
const buttonPrev5 = document.getElementById('button-prev5');
const buttonNext5 = document.getElementById('button-next5');
const track5 = document.getElementById('track5');
const slickList5 = document.getElementById('slick-list5');
const slick5 = document.querySelectorAll('.slick5');

const slickWidth5 = slick5[0].offsetWidth;

buttonPrev5.onclick = () => Move5(1);
buttonNext5.onclick = () => Move5(2);

function Move5(value) {
    const trackWidth = track5.offsetWidth;
    const listWidth = slickList5.offsetWidth;

    track5.style.left == "" ? leftPosition = track5.style.left = 0 : leftPosition = parseFloat(track5.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track5.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track5.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
} 

/*Saturno*/
const buttonPrev6 = document.getElementById('button-prev6');
const buttonNext6 = document.getElementById('button-next6');
const track6 = document.getElementById('track6');
const slickList6 = document.getElementById('slick-list6');
const slick6 = document.querySelectorAll('.slick6');

const slickWidth6 = slick6[0].offsetWidth;

buttonPrev6.onclick = () => Move6(1);
buttonNext6.onclick = () => Move6(2);

function Move6(value) {
    const trackWidth = track6.offsetWidth;
    const listWidth = slickList6.offsetWidth;

    track6.style.left == "" ? leftPosition = track6.style.left = 0 : leftPosition = parseFloat(track6.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track6.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track6.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
} 

/*Urano*/
const buttonPrev7 = document.getElementById('button-prev7');
const buttonNext7 = document.getElementById('button-next7');
const track7 = document.getElementById('track7');
const slickList7 = document.getElementById('slick-list7');
const slick7 = document.querySelectorAll('.slick7');

const slickWidth7 = slick7[0].offsetWidth;

buttonPrev7.onclick = () => Move7(1);
buttonNext7.onclick = () => Move7(2);

function Move7(value) {
    const trackWidth = track7.offsetWidth;
    const listWidth = slickList7.offsetWidth;

    track7.style.left == "" ? leftPosition = track7.style.left = 0 : leftPosition = parseFloat(track7.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track7.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track7.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
} 

/*Neptuno*/
const buttonPrev8 = document.getElementById('button-prev8');
const buttonNext8 = document.getElementById('button-next8');
const track8 = document.getElementById('track8');
const slickList8 = document.getElementById('slick-list8');
const slick8 = document.querySelectorAll('.slick8');

const slickWidth8 = slick8[0].offsetWidth;

buttonPrev8.onclick = () => Move8(1);
buttonNext8.onclick = () => Move8(2);

function Move8(value) {
    const trackWidth = track8.offsetWidth;
    const listWidth = slickList8.offsetWidth;

    track8.style.left == "" ? leftPosition = track8.style.left = 0 : leftPosition = parseFloat(track8.style.left.slice(0, -2) * -1);

    if(leftPosition < (trackWidth - listWidth) && value == 2) {
        track8.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    } else if(leftPosition > 0 && value == 1) {
        track8.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
} 
