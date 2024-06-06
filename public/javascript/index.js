document.addEventListener('DOMContentLoaded', function () {
    var globalCurrentSlide = 1;
    var delai = 5000;
    var slidable = function () {
        var carrousel = document.getElementById("carrousel");
        if (carrousel) {
            var nbImage = carrousel.children.length;
            if (nbImage + 1 == globalCurrentSlide) {
                var firstimage = document.getElementById("carrousel-first");
                if (firstimage) {
                    firstimage.style.transform = "translateX(0)";
                    carrousel.style.transform = "translateX(0)";
                    globalCurrentSlide = 1;
                }
            }
            else {
                if (nbImage - 2 < globalCurrentSlide) {
                    var firstimage = document.getElementById("carrousel-first");
                    if (firstimage) {
                        firstimage.style.transform = "translateX(calc(var(--responsive-translate) * " + nbImage + "))";
                    }
                }
            }
            carrousel.style.transform = "translateX(calc(var(--responsive-translate) * " + (globalCurrentSlide * -1) + "))";
            globalCurrentSlide++;
        }
    };
    setInterval(slidable, delai);
});
