const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Фоновые цвета для каждого слайда
const backgroundColors = ['bg-orange-400', 'bg-gray-400', 'bg-green-400', 'bg-red-400'];

// Меняем фон, когда изменяется слайд
swiper.on('slideChange', () => {
    const page = document.getElementById('page');
    const activeIndex = swiper.realIndex; // Индекс активного слайда
    page.className = `transition-colors duration-500 ${backgroundColors[activeIndex]}`;
});
