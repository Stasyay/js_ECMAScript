// 3. "Изменение стиля элемента через заданное время"
// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет
// стиль элемента с id 'myElement'

function changeStyleDelayed(message, delay) {
    const changeElement = document.querySelector(`.${message}`);
    changeElement.textContent = `Эта надпись станет красной через ${delay / 1000} сек.`
    setTimeout(() => {
        changeElement.style.color = "red"
    }, delay);

}

changeStyleDelayed('myElement', 2000)