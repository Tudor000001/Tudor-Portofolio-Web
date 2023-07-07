window.addEventListener('scroll', function () {
    var scrollingElement = document.getElementById('scroll');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    scrollingElement.style.top = scrollTop + 'px';
})