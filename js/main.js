///BURGER MENU
const menuBurger = document.querySelector('.burger-menu');
const menuBurgerBlock = document.querySelector('.menu-burger-block');
const menuHeader = document.querySelector('.header-menu');
const Header = document.querySelector('.header');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    menuBurgerBlock.classList.toggle('active');
    menuHeader.classList.toggle('active');
    Header.classList.toggle('active');
});

//REGISTRATION FORM

document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name-input');
    const surnameInput = document.getElementById('surname-input');
    const phoneInput = document.getElementById('phone-input');
    const emailInput = document.getElementById('email-input');
    const profInput = document.getElementById('prof-input');
    const checkbox = document.getElementById('checkbox');
    const submitButton = document.getElementById('submit-button');
    const form = document.getElementById('form');

    function validateField(input, pattern, errorMessage) {
        const value = input.value.trim();
        if (value === "") {
            input.placeholder = "Поле обов'язкове для введення";
            input.classList.add('invalid');
            input.style.boxShadow = "0 0 2px 1px red";
            return false;
        } else if (!pattern.test(value) || (input.id === 'name-input' && !isFirstLetterUpperCase(value) || input.id === 'surname-input' && !isFirstLetterUpperCase(value))) {
            input.placeholder = errorMessage;
            input.value = "";
            input.classList.add('invalid');
            input.style.boxShadow = "0 0 2px 1px red";
            return false;
        } else {
            input.textContent = "";
            input.style.boxShadow = "";
            input.classList.remove('invalid');
            input.style.boxShadow = "0 0 2px 1px #ccc";

            return true;
        }
    }

    function isFirstLetterUpperCase(str) {
        return /^[A-ZА-ЯЁІЇЄҐ]/.test(str);
    }

    function validateCheckbox() {
        if (!checkbox.checked) {
            checkbox.style.boxShadow = "0 0 2px 3px rgba(228, 106, 106, 0.75)";
            return false;
        } else {
            checkbox.style.boxShadow = "";
            return true;
        }
    }


    function handleSubmit(event) {
        event.preventDefault();

        const isNameValid = validateField(nameInput, /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/, "Неправильний формат введення даних");
        const isSurnameValid = validateField(surnameInput, /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/, "Неправильний формат введення даних");
        const isEmailValid = validateField(emailInput, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Неправильний формат Email");
        const isPhoneValid = validateField(phoneInput, /^\d{12}$/, "Номер телефону: 38 XXX XX XX XXX");
        const isProfValid = validateField(profInput, /^(developer|Developer|QA|qa|Qa|qA)$/, "Developer or QA");
        const isCheckboxValid = validateCheckbox();

        if (isNameValid && isSurnameValid && isEmailValid && isPhoneValid && isProfValid && isCheckboxValid) {
            form.submit();
            form.style.display = 'none';
        }
    }

    submitButton.addEventListener('click', handleSubmit);

    nameInput.addEventListener('focus', function () {
        if (nameInput.classList.contains('invalid')) {
            nameInput.classList.remove('invalid');
            nameInput.style.border = "2px solid #ccc";
        }
    });

    emailInput.addEventListener('focus', function () {
        if (emailInput.classList.contains('invalid')) {
            emailInput.classList.remove('invalid');
            emailInput.style.border = "2px solid #ccc";
        }
    });

    phoneInput.addEventListener('focus', function () {
        if (phoneInput.classList.contains('invalid')) {
            phoneInput.classList.remove('invalid');
            phoneInput.style.border = "2px solid #ccc";
        }
    });

    surnameInput.addEventListener('focus', function () {
        if (surnameInput.classList.contains('invalid')) {
            surnameInput.classList.remove('invalid');
            surnameInput.style.border = "2px solid #ccc";
        }
    });

    profInput.addEventListener('focus', function () {
        if (profInput.classList.contains('invalid')) {
            profInput.classList.remove('invalid');
            profInput.style.border = "2px solid #ccc";
        }
    });

});

///BLOCK COURSES
window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        }

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex);
            });
        }
    };
    resizableSwiper(
        '(max-width: 10000px)',
        '.slider',
        {
            spaceBetween: 10,
            slidesPerView: 3,
        },
        someFunc
    );
    resizableSwiper(
        '(max-width: 850px)',
        '.slider',
        {
            loop: true,
            spaceBetween: 10,
            infinite: true,
            slidesPerView: 2,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        },
        someFunc
    );
    resizableSwiper(
        '(max-width: 600px)',
        '.slider',
        {
            loop: true,
            spaceBetween: 32,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
        someFunc
    );
});

///BLOCK OUR MENTORS
document.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.slider-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        arrows: false,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    });
});

//BLOCK RESPONSES
$(document).ready(function () {
    $('.sliders').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 10000
    });
});

