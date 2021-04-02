class Person {
  birthYear = 2003

  // теперь можно делать приватные методы,
  // с помощью ключевого символа #
  // перед названием метода
  get #age() {
    return this.#getYear() - this.birthYear
  }

  logAge() {
    return this.#age
  }

  // делаем метод приватным
  #getYear() {
    return new Date().getFullYear()
  }
}

const person = new Person()

// выведет undefined, ибо это приватный метод
console.log(person.age)

// сработает корректно, ибо мы вызываем публичный метод,
// который внутри себя использует приватный метод - так можно
console.log(person.logAge())
