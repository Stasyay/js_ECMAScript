// Задание 1. "Управление библиотекой книг"
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и
// методами:
// ● Свойство title (название) - строка, название книги.
// ● Свойство author (автор) - строка, имя автора книги.
// ● Свойство pages (количество страниц) - число, количество страниц в книге.
// ● Метод displayInfo() - выводит информацию о книге (название, автор и
// количество страниц).


class Book {
    title = '';
    author = '';
    pages = '';

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    };

    displayInfo() {
        console.log(` название: ${this.title}\n автор: ${this.author}\n количество страниц: ${this.pages}`);
    }

}

const book = new Book()
book.title = 'IT'
book.author = 'King'
book.pages = 465
book.displayInfo()

const book2 = new Book('Carrie', 'King', 321)
book2.displayInfo()