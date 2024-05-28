const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        if (nav) {
            nav.classList.add('active');
        }
    });
}


if (close) {
    close.addEventListener('click', () => {
        if (nav) {
            nav.classList.remove('active');
        }
    });
}
