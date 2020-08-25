// Dropdown function:
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, dropdown1);
});


// Carousel function:
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel-slider');
    M.Carousel.init(elems, {});
  });

