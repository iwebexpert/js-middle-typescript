// Классы в TypeScript
console.info('Классы в TypeScript')
abstract class Figure {
  info() {
    console.info('Это метод info() класса Figure')
  }
  abstract printInfo(isShow: boolean): string
}

// abstract class Figure2 extends Figure {
//   abstract printInfo2(isShow: boolean): string
// }

// const figure1 = new Figure()
// figure1.info()

class Circle extends Figure {
  private radius: number = 25
  public static readonly PI: number = 3.14
  public setRadius(radius: number): void {
    if (radius > 0) {
      this.radius = radius
    }
  }

  public getRadius() {
    return this.radius
  }

  info() {
    console.info('Это метод info() класса Circle')
    super.info()
  }

  printInfo(isShow: boolean = false): string {
    const message = `Радиус круга равен ${this.radius}`
    if (isShow) {
      console.info(message)
    }

    return message
  }
}

interface IRect {
  width: number
  info(): void
  printInfo(isShow: boolean): string
}

// interface IRect {
//   title: string
// }

interface IRectTitle extends IRect {
  title: string
}

interface IRect2 {
  readonly description: string
}

// type ExamleType = {
//   title: string
// }

// type ExamleType2 = ExamleType & {
//   description: string
// }

// type ExamleType3 = string

class Rect extends Figure implements IRectTitle, IRect2 {
  public width: number
  protected height: number
  title: string = 'Название прямоугольника'
  description: string = 'Описание прямоугольника'
  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  info() {
    console.info('Это метод info() класса Rect')
    super.info()
  }

  printInfo(isShow: boolean = false): string {
    const message = `Ширина фигуры равна ${this.width}, высота ${this.height}`
    if (isShow) {
      console.info(message)
    }

    return message
  }
}

class Square extends Rect {
  constructor(side: number) {
    super(side, side)

    // this.height = 2000
    // this.width = 20
  }

  info() {
    console.info('Это метод info() класса Square')
    super.info()
  }
}

const circle1 = new Circle()
circle1.info()
console.info('Radius=' + circle1.getRadius())
circle1.setRadius(200)
console.info('Radius=' + circle1.getRadius())
circle1.printInfo(true)
console.info(Circle.PI)
// Circle.PI = 3.1415
console.info(Circle.PI)

const rect1 = new Rect(200, 100)
rect1.info()
rect1.printInfo(true)

const square1 = new Square(500)
square1.info()
console.info(square1.printInfo())

// Интерфейсы для объектов, массивов и функций
interface IRectItem {
  readonly width: number
  readonly height: number
  printInfo(isShow?: boolean): string
}

const rect2: IRectItem = {
  width: 100,
  height: 120,
  printInfo(isShow: boolean = false) {
    const message = `Ширина фигуры равна ${this.width}, высота ${this.height}`
    if (isShow) {
      console.info(message)
    }

    return message
  },
}

console.info(rect2, rect2.printInfo())

interface DictionaryColor {
  [index: string]: string
}

const color1: DictionaryColor = {}
color1['red'] = 'Красный'
color1['blue'] = 'Синий'
console.info(color1, color1['red'])

interface DictionaryColor2 {
  [index: number]: string
}

const color2: DictionaryColor2[] = []
color2[0] = 'Красный'
color2[1] = 'Синий'
color2.push('Белый')
console.info(color2, color2[1])

const color3: string[] = []
color3.push('Белый')
console.info(color3)

interface IUserBuilder {
  (name: string, age: number): string
  (name: string, age: number, department: string): string
}

const createUser: IUserBuilder = (name, age, department = '') =>
  `Пользователь ${name}; возраст ${age}; ${department}`

console.info(createUser('Иван', 30))
console.info(createUser('Иван', 30, 'Front-end'))