document.addEventListener('DOMContentLoaded', () => {
      let globalCurrentSlide = 0;
      let delai = 2000;
      const slidable = () => {
            let carrousel = document.getElementById("carrousel");
            if (carrousel) {
                  let nbImage = carrousel.children.length;
                  if (nbImage < globalCurrentSlide) {

                  }
                  else {
                        carrousel.style.transform = "translateX(calc(var(--responsive-translate) * -1 * " + globalCurrentSlide + "))";
                  }
                  globalCurrentSlide++;
            }
      }
      setInterval(slidable, delai);
});