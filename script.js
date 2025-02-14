// Инициализация анимаций с помощью библиотеки AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000, // Длительность анимации
        once: true, // Анимации показываются только один раз при прокрутке
        easing: 'ease-in-out', // Тип easing для анимаций
    });
});
// Добавляем функционал в script.js
document.addEventListener('DOMContentLoaded', function() {
    const bugReportButton = document.querySelector('.bug-report-btn');
    const bugModal = document.getElementById('bugModal');
    const closeBugModal = document.getElementById('closeBugModal');
    const bugForm = document.getElementById('bugReportForm');
    const successMessage = document.getElementById('bugSuccessMessage');

    // Открыть модальное окно
    bugReportButton.addEventListener('click', function() {
        bugModal.classList.add('show');
    });

    // Закрыть модальное окно
    closeBugModal.addEventListener('click', function() {
        bugModal.classList.remove('show');
    });

    // Закрыть окно при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target === bugModal) {
            bugModal.classList.remove('show');
        }
    });

    // Отправка формы
    bugForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Останавливаем стандартное поведение формы

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;

        // Отправляем данные на сервер
        try {
            await fetch('/save-bug-report', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, description })
            });

            // Показываем сообщение об успешной отправке
            successMessage.classList.add('show');
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        } catch (error) {
            console.error('Ошибка при отправке данных:', error);
        }

        // Закрыть модальное окно
        bugModal.classList.remove('show');

        // Очистить форму
        bugForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.order-btn');
    const modal = document.getElementById('orderModal');
    const closeModal = document.getElementById('closeModal');

    // Открытие модального окна при нажатии на кнопку "Պատվիրել"
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block'; // Показываем модальное окно
        });
    });

    // Закрытие модального окна при нажатии на крестик
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none'; // Скрываем модальное окно
    });

    // Закрытие модального окна при клике вне окна
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Скрываем модальное окно
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const openEventButton = document.querySelector('.open-event-btn');
    const eventPopup = document.getElementById('eventPopup');
    const closeEventPopupButton = document.getElementById('closeEventPopup');

    // Открытие модального окна при нажатии на кнопку
    openEventButton.addEventListener('click', function() {
        eventPopup.style.display = 'block'; // Показываем окно
    });

    // Закрытие модального окна при нажатии на крестик
    closeEventPopupButton.addEventListener('click', function() {
        eventPopup.style.display = 'none'; // Скрываем окно
    });

    // Закрытие модального окна при клике вне окна
    window.addEventListener('click', function(event) {
        if (event.target === eventPopup) {
            eventPopup.style.display = 'none'; // Скрываем окно
        }
    });
});

const openAboutBtn = document.querySelector('.open-about-btn');
const openEventsBtn = document.querySelector('.open-events-btn');
const aboutPopup = document.querySelector('.about-popup');
const closeAboutPopup = document.querySelector('.close-about-popup');

// Открытие модального окна "О нас"
openAboutBtn.addEventListener('click', () => {
    aboutPopup.style.display = 'block';
});

// Закрытие модального окна "О нас"
closeAboutPopup.addEventListener('click', () => {
    aboutPopup.style.display = 'none';
});

// Закрытие модального окна при клике вне окна
window.addEventListener('click', (e) => {
    if (e.target === aboutPopup) {
        aboutPopup.style.display = 'none';
    }
});

// Листание видео
const prevVideoBtn = document.querySelector('.prev-video-btn');
const nextVideoBtn = document.querySelector('.next-video-btn');
const video = document.getElementById('about-video');

prevVideoBtn.addEventListener('click', () => {
    video.src = "previous-video.mp4"; // Укажите путь к предыдущему видео
    video.play();
});

nextVideoBtn.addEventListener('click', () => {
    video.src = "next-video.mp4"; // Укажите путь к следующему видео
    video.play();
});     


// Скрипт для анимации кнопки и изображения
document.getElementById('menuButton').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Анимация кнопки (спускаем ее вниз)
    this.classList.add('moving');
    setTimeout(() => {
        // Прячем кнопку, когда она достигнет конца
        this.style.display = 'none';
    }, 600);  // Параметры таймаута соответствуют длительности анимации
    
    // Заменяем изображение
    const imageContainer = document.querySelector('.image-container');
    const image = document.querySelector('.hero-image');
    image.classList.add('image-animate');
});

document.addEventListener('DOMContentLoaded', function () {
    const translations = {
        en: {
            title: "Welcome to our website",
            description: "This is an example of multilingual support.",
            button: "Click here",
            footer: "Contact us for more information.",
        },
        ru: {
            title: "Добро пожаловать на наш сайт",
            description: "Это пример поддержки нескольких языков.",
            button: "Нажмите здесь",
            footer: "Свяжитесь с нами для получения дополнительной информации.",
        },
        hy: {
            title: "Բարի գալուստ մեր կայք",
            description: "Սա բազմալեզու աջակցության օրինակ է:",
            button: "Սեղմեք այստեղ",
            footer: "Կապվեք մեզ հետ լրացուցիչ տեղեկատվության համար:",
        }
    };

    const languageButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-translate]');

    languageButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLang = button.getAttribute('data-lang');

            // Перебираем элементы и обновляем их текст
            translatableElements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[selectedLang] && translations[selectedLang][key]) {
                    element.textContent = translations[selectedLang][key];
                }
            });

            // Сохраняем выбранный язык в локальное хранилище (опционально)
            localStorage.setItem('selectedLanguage', selectedLang);
        });
    });

    // Загружаем сохранённый язык при загрузке страницы
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.querySelector(`.lang-btn[data-lang="${savedLanguage}"]`).click();
});

document.getElementById("openModal").addEventListener("click", function () {
    let warning = document.getElementById("warning");

    // Показываем предупреждение
    warning.classList.add("show-warning");

    // Через 5 секунд скрываем предупреждение
    setTimeout(() => {
        warning.classList.add("hide-warning");
        
        // Убираем классы после завершения анимации
        setTimeout(() => {
            warning.classList.remove("show-warning", "hide-warning");
        }, 500);
        
    }, 5000);
});

