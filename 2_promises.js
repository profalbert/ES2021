const createPromise = (value, delay, error) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      error ? reject(error) : resolve(value)
    }, delay)
  })
}

const p1 = createPromise(1, 250)
const p2 = createPromise(2, 500, 'Unknow error')
const p3 = createPromise(3, 150, 'Some custom error')

const start = async () => {
  try {
    const resAny = await Promise.any([p3])
    console.log([resAll, resRace, resAny])
  } catch (error) {
    console.log(error)
    console.log(error.errors)
  }
  // const resAll = await Promise.all([p1, p2, p3])
  // const resRace = await Promise.race([p1, p2, p3])
  // todo: узнать отличие между Promise.race() и Promise.any()
}

start()
