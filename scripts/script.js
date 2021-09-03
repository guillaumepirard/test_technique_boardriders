// All images :
const images = document.querySelectorAll(".container__card__carousel__image")

// FUNCTION CAROUSEL (ANIMATION ON THE IMAGES) :
const carousel = () => {
    for (let index = 0; index < images.length; index++) {
        // Remove added classes :
        images[index].classList.remove('slideOut');
        images[index].classList.remove('slideIn');

        // After one second, add the class 'slideOut'
        setTimeout(() => {
            images[index].classList.add('slideOut');
        }, 1000);

        // After 2,3s ((previous timeout) + 1s + 0.3s (transition time)) add the class 'slideOut'
        setTimeout(() => {
            images[index].classList.add('slideIn');
        }, 2300);
    }

    setTimeout(() => {
        carousel()
    }, 2600); // After 2.6s the animation is called back (all timeout + 0.3s (transition time))
}

carousel();

