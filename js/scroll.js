const lines = document.querySelectorAll('.page-tracker .line');
const spans = document.querySelectorAll('.page-tracker .tracker span');

let prevScrollY = 0;

document.addEventListener("scroll", () => {
    let currentScrollY = 0;

    lines.forEach((line) => line.classList.remove('active-line'));
    spans.forEach((span) => span.classList.remove('active-text'));

    if (prevScrollY < window.scrollY) {
        currentScrollY = window.innerHeight * 0.7;
    } else {
        currentScrollY = window.innerHeight * 0.3;
    }

    if (window.scrollY <= currentScrollY) {
        lines[0].classList.add('active-line');
        spans[0].classList.add('active-text');
    } else if (window.scrollY <= window.innerHeight + currentScrollY) {
        lines[1].classList.add('active-line');
        spans[1].classList.add('active-text');
    } else {
        lines[2].classList.add('active-line');
        spans[2].classList.add('active-text');
    }

    prevScrollY = window.scrollY;
});
