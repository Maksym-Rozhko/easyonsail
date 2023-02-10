document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faqs__question');

    if (faqItems) {
        faqItems.forEach(elem => {
            elem.addEventListener('click', () => {
                elem.parentElement.classList.toggle('faqs__item--active');
            });
        });
    }
});
