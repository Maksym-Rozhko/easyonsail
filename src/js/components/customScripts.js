document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faqs__question');

    if (faqItems) {
        faqItems.forEach(elem => {
            elem.addEventListener('click', () => {
                elem.parentElement.classList.toggle('faqs__item--active');
            });
        });
    }

    const regionsDescription = document.querySelector('.description-hidden');
    const regionsReadMore = document.querySelector('.regions-description a');

    if (regionsReadMore) {
        regionsReadMore.addEventListener('click', e => {
            regionsDescription.classList.toggle('text-hidden')
        });
    }
});
