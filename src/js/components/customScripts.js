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

    const customTabs = (btnSelectors, contentSelectors) => {
        const btns = document.querySelectorAll(btnSelectors);
        const contents = document.querySelectorAll(contentSelectors);


        const removeTabActiveClass = () => btns.forEach(btn => btn.parentElement.classList.remove('active'));
        const removeContentsActiveClass = () => contents.forEach(content => content.classList.add('d-none'));

        if (btns) {
            btns.forEach((btn, i) => {

                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (!contents[i]) return;
                    if (btn.dataset.type === contents[i].id) {
                        removeTabActiveClass();
                        removeContentsActiveClass();

                        btn.parentElement.classList.add('active');
                        contents[i].classList.remove('d-none');
                    }
                });
            });
        }
    }

    customTabs('.yachts .yachts__links a', '.yachts .hot-offers .hot-offer');
});
