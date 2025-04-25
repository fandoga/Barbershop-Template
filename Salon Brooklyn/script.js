const menuLinks = document.querySelector('.menu_links');
const signUpButton = document.querySelector('.button');


let element;
const offset = 50;
let elementPosition
let offsetPosition


document.addEventListener('click', (event) => {
    Event = event.target
    if (Event.dataset.target) {
    event.preventDefault()
    element = document.querySelector(Event.dataset.target);
    elementPosition = element.getBoundingClientRect().top;
    offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });

    console.log(Event.dataset.target);
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back_to_top");

    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            backToTop.style.bottom = "-30px";
        } else {
            backToTop.style.bottom = "-200px";
        }
    });

    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
