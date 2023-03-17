class User {
  #name = 'Olga'
  age = 28
  static PI = 3.14
  getName() {
    return this.#name
  }

  static info() {
    return new Date()
  }
}

// const user1 = new User()
// user1.getName()
console.info(User.PI)
console.info(User.info())
