/*人机按钮*/
function greet() {
    window.location.href = 'https://www.bilibili.com/video/BV1GJ411x7h7/';
}
/*滚动图片*/
// 初始化变量
const sliderInner = document.querySelector('.slider-inner');
const slides = document.querySelectorAll('.slide-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slider = document.querySelector('.slider'); // 新增：获取滚动容器
let currentSlide = 0;
const slideCount = slides.length;
let autoScrollInterval;

// 自动滚动函数（驻停3秒后切换）
function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSliderPosition();
    }, 3000); // 3000ms=3秒驻停
}

// 更新滚动位置
function updateSliderPosition() {
    sliderInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// 手动切换上一张
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSliderPosition();
    resetAutoScroll(); // 点击后重置自动滚动计时
});

// 手动切换下一张
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slideCount;
    updateSliderPosition();
    resetAutoScroll(); // 点击后重置自动滚动计时
});

// 重置自动滚动（避免点击后立即滚动）
function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
}

// 新增：鼠标悬停暂停滚动
slider.addEventListener('mouseover', () => {
    clearInterval(autoScrollInterval);
});

// 新增：鼠标移开恢复滚动
slider.addEventListener('mouseout', () => {
    resetAutoScroll();
});

// 页面加载后启动自动滚动
window.addEventListener('load', startAutoScroll);
