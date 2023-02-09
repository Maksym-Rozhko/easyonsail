document.addEventListener('DOMContentLoaded', () => {

    const smoothScrollToElems = (links) => {
        const anchorsLink = document.querySelectorAll(links);

        if (anchorsLink) {
            const smoothScroll = (anchors) => {
                for (let anchor of anchors) {
                    const blockID = anchor.getAttribute('href');

                    anchor.addEventListener('click', (e) => {
                        e.preventDefault();
                        brokersNavigationBtn.parentElement.classList.remove('active');
                        document.querySelector(blockID).scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    });
                };
            };

            smoothScroll(anchorsLink);
        }
    };

    smoothScrollToElems('a');

    const faqItems = document.querySelectorAll('.faqs__question');

    if (faqItems) {
        faqItems.forEach(elem => {
            elem.addEventListener('click', () => {
                elem.parentElement.classList.toggle('faqs__item--active');
            });
        });
    }
});
