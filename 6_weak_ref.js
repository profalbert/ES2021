const func = () => {
  const person = new WeakRef({
    name: 'Albert',
  })

  console.log(person.deref().name)
}

const start = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(func())
    }, 300)
  })

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(func())
    }, 700)
  })
}

start()

// const func = () => {
//   const person = {
//     name: 'Albert',
//   }

//   console.log(person.name)
// }

// const start = async () => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(func())
//     }, 300)
//   })

//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(func())
//     }, 700)
//   })
// }

// start()
