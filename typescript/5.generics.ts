/* eslint-disable @typescript-eslint/no-unused-vars */
// Введение в Дженерики
console.info('Введение в Дженерики')

function searchString(array: string[], query: string): boolean {
  for (const value of array) {
    if (value === query) {
      return true
    }
  }
  return false
}

function searchNumber(array: number[], query: number): boolean {
  for (const value of array) {
    if (value === query) {
      return true
    }
  }
  return false
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function searchAny(array: any[], query: any): boolean {
  for (const value of array) {
    if (value === query) {
      return true
    }
  }
  return false
}

searchAny(['Test', 1234, undefined, {}], 'Test')

function search<T>(array: T[], query: T): boolean {
  for (const value of array) {
    if (value === query) {
      return true
    }
  }
  return false
}

console.info(search<string>(['Test', 'Red'], 'Test'))
console.info(search<number>([1, 2], 3))

console.info(search([1, 2], 3))

// Необходимо указание типов данных
function swapExample<T>(a: T, b: T): void {
  const temporary = a
  a = b
  b = temporary
}

const userInfoA: number = 1
const userInfoB: string = 'One'
swapExample<string | number>(userInfoA, userInfoB)

// Дженерики. Типы и интерфейсы
type CartInfo<T = number> = {
  id: number
  products: string[]
  currency: T
}

const cart1: CartInfo = {
  id: 1,
  products: [],
  currency: 1,
}
console.info(cart1)

const cart2: CartInfo<string> = {
  id: 1,
  products: [],
  currency: 'Ruble',
}
console.info(cart2)

interface ICartInfo<T = number> {
  id: number
  products: string[]
  currency: T
}

const cart3: ICartInfo = {
  id: 1,
  products: [],
  currency: 1,
}
console.info(cart3)

const cart4: ICartInfo<string> = {
  id: 1,
  products: [],
  currency: 'Ruble',
}
console.info(cart4)

// Оператор keyof
interface IUser {
  name: string
  age: number
}

type UserKeys = keyof IUser

const userName2: UserKeys = 'name'
console.info(userName2)

const user = {
  name: 'Иван',
  age: 30,
  department: 'Front-end',
}

type UserKeys2 = keyof typeof user

// eslint-disable-next-line unicorn/no-array-for-each
Object.keys(user).forEach((key) => {
  console.info(user[key as UserKeys2])
  console.info(user[key])
})

interface ObjectConstructor {
  keys<T>(o: T): (keyof T)[]
}

for (const key of Object.keys(user)) {
  console.info(user[key])
}

// Дженерики и Классы
// Пример 1
interface ICheckId<T> {
  getId(): T
}

class CheckId<T> implements ICheckId<T> {
  constructor(private readonly id: T) {
    this.id = id
  }

  getId(): T {
    return this.id
  }
}

const checkId = new CheckId<number>(1)
console.info(checkId)

// Пример 2
class Queue<T> {
  private data: T[] = []

  public push = (item: T) => this.data.push(item)
  public pop = (): T | undefined => this.data.shift()
}

const queue1 = new Queue<number>()
queue1.push(1)
console.info(queue1.pop())
queue1.push(2)
console.info(queue1.pop())

// Ограничения Дженериков
// Пример 1
interface ILength {
  length: number
}

function getLength<T extends ILength>(value: T): number {
  return value.length
}

console.info(getLength(['Красный', 'Синий']))
console.info(getLength('Красный'))
// console.info(getLength(1))

// Пример 2
function getValueOfObject<T, K extends keyof T>(object: T, key: K): T[K] {
  return object[key]
}

console.info(getValueOfObject(user, 'name'))
