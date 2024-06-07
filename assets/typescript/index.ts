document.addEventListener('DOMContentLoaded', () => {
      let globalCurrentSlide = 1;
      let delai = 5000;
      const slidable = () => {
            let carrousel = document.getElementById("carrousel");
            if (carrousel) {
                  let nbImage = carrousel.children.length;
                  if (nbImage > 1) {
                        if (nbImage + 1 == globalCurrentSlide) {
                              let firstimage = document.getElementById("carrousel-first");
                              if (firstimage) {
                                    firstimage.style.transform = "translateX(0)";
                                    carrousel.style.transform = "translateX(0)";
                                    globalCurrentSlide = 1;
                              }
                        }
                        else {
                              if (nbImage - 2 < globalCurrentSlide) {
                                    let firstimage = document.getElementById("carrousel-first");
                                    if (firstimage) {
                                          firstimage.style.transform = "translateX(calc(var(--responsive-translate) * " + nbImage + "))";
                                    }
                              }
                        }
                        carrousel.style.transform = "translateX(calc(var(--responsive-translate) * " + (globalCurrentSlide * -1) + "))";
                        globalCurrentSlide++;
                  }
            }
      }
      setInterval(slidable, delai);
});