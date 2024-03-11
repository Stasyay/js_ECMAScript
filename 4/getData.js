// 1. "Получение данных о пользователе"
// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.
// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

const userId = 4
// const url = 'https://api.github.com/users/octocat'
const url = 'https://jsonplaceholder.typicode.com/users'

getUserData(userId)

function getUserData(id) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status)
            }
            return response.json();
        })
        .then((data) => {
            const user = data.find((el) => el.id === id);
            user ? console.log(user) : alert("Нет пользователя с таким id")
        })
        .catch((err) => console.log('Error', err))
}



// async function getUserData(id) {
//     const response = await fetch(url);
//     if (response.ok) {
//         const data = await response.json();
//         const user = data.find((el) => el.id === id);
//         user ? console.log(user) : alert("Нет пользователя с таким id")
//     } else {
//         alert("Ошибка HTTP: " + response.status);
//     }
// }