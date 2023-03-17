// Базовые типы данных
const userName: string = 'Olga'
const userAge: number = 28
const userAccount: bigint = BigInt(255)
// const userAccount: bigint = 255n // ES2020+

const isNull: null = null
const isUndefined: undefined = undefined

const isAdmin: boolean = true

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userTest: any = []

console.info(
  userName,
  userAge,
  userAccount,
  isNull,
  isUndefined,
  isAdmin,
  userTest
)

// Массивы и кортежи
const arrayNums: number[] = [1, 2, 3]
const arrayBoolean: boolean[] = [true, false, true]
const arrayBoolean2: Array<boolean> = [true, false, true]
const arrayNumsAndStrings: (number | string)[] = [1, '2', 3, '4']
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const arrayAny: any[] = [1, true, 'Oleg']

const arrayUser1: [number, boolean, string] = [1, true, 'Oleg']
arrayUser1[0] = 10
arrayUser1[1] = false
arrayUser1[2] = 'Олег'

console.info(
  arrayNums,
  arrayBoolean,
  arrayBoolean2,
  arrayNumsAndStrings,
  arrayAny,
  arrayUser1
)

// Объединения и перечисления (Enums)
// Пример 1
function myId(id: number | string) {
  if (typeof id === 'string') {
    console.info(id.toLocaleLowerCase())
  } else {
    console.info(id)
  }
}

myId('5')
myId(5)
myId('Test')

// Пример 2
function printColors(color: string | string[]) {
  if (Array.isArray(color)) {
    console.info('Цвета: ' + color.join(' и '))
  } else {
    console.info('Цвет: ' + color)
  }
}

printColors('красный')
printColors(['красный', 'белый'])

// Пример 3
function getItemFirst(items: number[] | string) {
  return items.slice(0, 1)
}

console.info(getItemFirst([1, 2, 3, 4]))
console.info(getItemFirst('Test'))

// Перечисления
const ANSWER_YES = 'YES'

// Пример 1
enum Answer {
  Yes = 'YES',
  No = 'NO',
  // No = '1234'.length,
}

console.info(ANSWER_YES, Answer.Yes, Answer.No)

// Пример 2
enum FileAccess {
  // Read = 2,
  // Write = 4,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
}

console.info(FileAccess.Read, FileAccess.Write, FileAccess.ReadWrite)

// Псевдонимы типов данных (пользовательские типы данных)
type BasePoint = {
  x: number
  y: number
}
const point1: BasePoint = {
  x: 10,
  y: 10,
}

function printPointCoords(point: BasePoint) {
  console.info(`x=${point.x}; y=${point.y}`)
}

console.info(point1)
printPointCoords(point1)

type FullPoint = BasePoint & {
  readonly title: string
  description?: string
}

const point2: FullPoint = {
  x: 100,
  y: 100,
  title: 'point2',
  description: 'Описание point2',
}

// point2.title = 'Test'

console.info(point2)
