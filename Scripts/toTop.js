const toTopButton = document.getElementById('toTop');

toTopButton.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
