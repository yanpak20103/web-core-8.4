let swiperInstance = null;
const mobileQuery = window.matchMedia('(max-width: 768px)');
const brandButtons = document.querySelectorAll('.brand-btn');
brandButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    });
});

function handleTabletAndDesktop() {
    if (mobileQuery.matches) {
        if (!swiperInstance) {
            swiperInstance = new Swiper('.brand-swiper', {
                slidesPerView: 1.25,
                spaceBetween: 16,
                grabCursor: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
    } else {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }
}

handleTabletAndDesktop();
mobileQuery.addEventListener('change', handleTabletAndDesktop);
const toggleButton = document.getElementById('toggleBrands');
const buttonText = toggleButton ? toggleButton.querySelector('.btn-text') : null;
const swiperContainer = document.querySelector('.brand-swiper');
if (toggleButton && swiperContainer && buttonText) {
    toggleButton.addEventListener('click', function() {
        swiperContainer.classList.toggle('is-opened');
        if(swiperContainer.classList.contains('is-opened')) {
            buttonText.textContent = 'Скрыть';
        } else {
            buttonText.textContent = 'Показать все';
        }
    });
}