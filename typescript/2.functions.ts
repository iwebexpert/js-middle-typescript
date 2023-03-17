// Базовая работа с функциями
console.info('Базовая работа с функциями')
function plus(x: number = 1, y?: number): number {
  return x + (y || 1)
}

console.info(plus(10, 20))
console.info(plus())

function printNumber(x: number): void {
  console.info(`x=${x}`)
}

printNumber(10)

// Остаточные параметры (rest parameters)
function multiply(m: number, ...parameters: number[]) {
  // console.info(parameters)
  return parameters.map(function (item) {
    return m * item
  })
}

console.info(multiply(100, 1, 10, 20, 50))

// Деструктуризация параметров (parameter destructuring)
type PlusParameters = {
  x: number
  y: number
}
function plus2({ x = 1, y }: { x: number; y: number }): number {
  return x + (y || 1)
}

console.info(plus2({ x: 10, y: 20 }))

function plus3({ x = 1, y }: PlusParameters): number {
  return x + (y || 1)
}

console.info(plus3({ x: 10, y: 20 }))

function plus4(items: PlusParameters): number {
  return items.x + (items.y || 1)
}

console.info(plus4({ x: 10, y: 20 }))

// Тип возвращаемого значения Never
function getMessage(message: string): never {
  // while (true) {}
  throw new Error(message)
}

try {
  getMessage('Error 1234')
} catch (error) {
  if (error instanceof Error) {
    console.info(error.message)
  }

  console.info((error as Error).message)
  console.info((<Error>error).message)
} finally {
  console.info('finally')
}

// Функции обратного вызова. Стрелочные функции
function printMessage(callback: (message: string) => void) {
  callback('Привет!')
}

function callback1(text: string) {
  console.info(text)
}

printMessage(callback1)

// Стрелочные функции
const callback2 = (text: string): void => console.info(text)
printMessage(callback2)

printMessage((text) => console.info(text))

type CallbackParameters = {
  (text: string): void
}

const callback3: CallbackParameters = (text) => console.info(text)
printMessage(callback3)

// Перегрузка функций
// Сигнатуры перегрузки
function createDate(timestamp: number): Date
function createDate(timestamp: number, month: number, year: number): Date
// Сигнатура реализации
function createDate(
  dayOrTimestamp: number,
  month?: number,
  year?: number
): Date {
  return month !== undefined && year !== undefined
    ? new Date(year, month, dayOrTimestamp)
    : new Date(dayOrTimestamp * 1000)
}

console.info(createDate(1_677_935_727))
console.info(createDate(5, 2, 2023))
// console.info(createDate(5, 2))

// Перегрузка стрелочных функций
type CreateDate = {
  (timestamp: number): Date
  (timestamp: number, month: number, year: number): Date
}
const createDate2: CreateDate = (
  dayOrTimestamp: number,
  month?: number,
  year?: number
): Date => {
  return month !== undefined && year !== undefined
    ? new Date(year, month, dayOrTimestamp)
    : new Date(dayOrTimestamp * 1000)
}

console.info(createDate2(1_677_935_727))
console.info(createDate2(5, 2, 2023))
// console.info(createDate2(5, 2))
