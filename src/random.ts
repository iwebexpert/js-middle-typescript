export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)

  // debugger
  return Math.floor(Math.random() * (max - min + 1)) + min
}
