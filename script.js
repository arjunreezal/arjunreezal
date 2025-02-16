
    dots[index].classList.add('active');
}

document.getElementById('prev').addEventListener('click', () => {
    showSlide(index - 1);
});

document.getElementById('next').addEventListener('click', () => {
    showSlide(index + 1);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
});

// Auto slide
setInterval(() => {
    showSlide(index + 1);
}, 5000);
