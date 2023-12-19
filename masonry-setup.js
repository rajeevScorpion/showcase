// masonry-setup.js

window.addEventListener('load', function() {
    var elem = document.querySelector('#gallery');
    var msnry = new Masonry(elem, {
        itemSelector: '.card',
        percentPosition: true
    });
});
