const smoothScrollToElems = (links) => {
    const anchorsLink = document.querySelectorAll(links);

    if (anchorsLink) {
        const smoothScroll = (anchors) => {
            for (let anchor of anchors) {
                const blockID = anchor.getAttribute('href');

                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (document.querySelector(blockID)) {
                        document.querySelector(blockID).scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            };
        };

        smoothScroll(anchorsLink);
    }
};

smoothScrollToElems('.region-page .anchors a');
