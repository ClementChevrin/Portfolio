document.addEventListener('DOMContentLoaded', function () {
    var globalCurrentSlide = 0;
    var delai = 2000;
    var slidable = function () {
        var carrousel = document.getElementById("carrousel");
        if (carrousel) {
            var nbImage = carrousel.children.length;
            if (nbImage < globalCurrentSlide) {
            }
            else {
                carrousel.style.transform = "translateX(calc(var(--responsive-translate) * -1 * " + globalCurrentSlide + "))";
            }
            globalCurrentSlide++;
        }
    };
    setInterval(slidable, delai);
});
