// Что такое Narrowing
console.info('Что такое Narrowing')
// Пример 1
function getId(id: number | string) {
  if (typeof id === 'string') {
    console.info(id.toLocaleLowerCase())
  } else {
    console.info(id)
  }
}

getId('5')
getId(5)
getId('Test')

// Пример 2
function showAllColors(colors: string | string[] | null) {
  if (colors && typeof colors === 'object') {
    for (const s of colors) {
      console.info(s)
    }
  } else if (typeof colors === 'string') {
    console.info(colors)
  }
}

console.info(typeof null, typeof {})
showAllColors(['red', 'blue'])
showAllColors('red')
showAllColors(null)

// Пример 3
function showAllColors2(colors: string | string[] | null) {
  if (colors !== null) {
    if (typeof colors === 'object') {
      for (const s of colors) {
        console.info(s)
      }
    } else if (typeof colors === 'string') {
      console.info(colors)
    }
  }
}

showAllColors2(['red', 'blue'])
showAllColors2('red')
showAllColors2(null)

// Пример 4
interface MultiplyParameters {
  value: number | null | undefined
}
function multiply2(object: MultiplyParameters, n: number) {
  // eslint-disable-next-line eqeqeq
  if (object.value != null) {
    console.info(object.value)
    object.value *= n
    console.info(object.value)
  }
}

multiply2({ value: 10 }, 2)
// eslint-disable-next-line eqeqeq
console.info(null == undefined, null === undefined)

// Сужение типов с помощью оператора in и instanceof
type Fish = { swim: () => void; title: string }
type Bird = { fly: () => void; title: string }

function go(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim()
  }
  return animal.fly()
}

const fish1: Fish | Bird = {
  title: 'fish1',
  swim() {
    console.info('Рыба плывет')
  },
}

console.info(go(fish1))

// instanceof
function writeToLog(value: Date | string) {
  if (value instanceof Date) {
    console.info(value.toUTCString())
  } else {
    console.info(value.toUpperCase())
  }
}

writeToLog(new Date())
writeToLog('Test')

// Присвоения. Анализ потока управления
let userId = Math.random() < 0.5 ? 1 : 'One'

userId = 2
console.info(userId)

userId = 'two'
console.info(userId)

// userId = true // Error

function test() {
  let id: string | number | boolean

  id = Math.random() < 0.5
  console.info(id)

  if (id) {
    id = 'One'
    console.info(id)
  } else {
    id = 1
    console.info(id)
  }

  return id
}

let userId2 = test()
userId2 = 2
console.info(userId2)

userId2 = 'two'
console.info(userId2)

// userId2 = true // Error

// Пользовательские защитники типов
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

function getFishOrBird(): Fish | Bird {
  const fish: Fish = {
    title: `fish ${Math.random()}`,
    swim() {
      console.info('Рыба плывет')
    },
  }

  const bird: Bird = {
    title: `bird ${Math.random()}`,
    fly() {
      console.info('Птица летит')
    },
  }

  return Math.random() < 0.5 ? fish : bird
}

const pet = getFishOrBird()

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

const pets: (Fish | Bird)[] = [
  getFishOrBird(),
  getFishOrBird(),
  getFishOrBird(),
  getFishOrBird(),
  getFishOrBird(),
  getFishOrBird(),
  getFishOrBird(),
]

// eslint-disable-next-line unicorn/no-array-callback-reference
const fishOnly: Fish[] = pets.filter(isFish)
console.info(fishOnly)

const fishOnly2: Fish[] = pets.filter((element) => isFish(element)) as Fish[]
console.info(fishOnly2)

// Более сложный случай
const fishTitleItem1 = fishOnly2[0]?.title || 'fish1'
console.info(fishTitleItem1)
const fishOnly3: Fish[] = pets.filter((pet): pet is Fish => {
  // Пользовательские условия поиска
  if (pet.title === fishTitleItem1) return false
  return isFish(pet)
})
console.info(fishOnly3)

// Исключающие объединения
// interface Figure {
//   type: 'circle' | 'square'
//   radius?: number
//   side?: number
// }

// function getArea(figure: Figure) {
//   if (figure.type === 'circle') {
//     // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//     return Math.PI * figure.radius! ** 2
//   }
// }

interface FigureCircle {
  type: 'circle'
  radius: number
}

interface FigureSquare {
  type: 'square'
  side: number
}

interface FigureRect {
  type: 'rect'
  width: number
  height: number
}

type MyFigure = FigureCircle | FigureSquare | FigureRect

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getArea(figure: MyFigure) {
  if (figure.type === 'circle') {
    return Math.PI * figure.radius ** 2
  }
}

function getArea2(figure: MyFigure) {
  switch (figure.type) {
    case 'circle': {
      return Math.PI * figure.radius ** 2
    }
    case 'square': {
      return figure.side ** 2
    }
    case 'rect': {
      return figure.width * figure.height
    }
    default: {
      const _check: never = figure
      return _check
    }
  }
}

const figure1: FigureCircle = {
  type: 'circle',
  radius: 10,
}
console.info(getArea2(figure1))
