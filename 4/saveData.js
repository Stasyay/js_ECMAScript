// 2. "Отправка данных на сервер"
// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

const urlforPost = 'https://httpbin.org/post'

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)

function saveUserData(dataUser) {

    fetch(urlforPost, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataUser)
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status)
            } return response.json()
        })
        .then((data) => {
            // console.log(data)
            console.log('User data saved successfully')
        })
        .catch(error => console.error('Ошибка в процессе доставки:', error));
}