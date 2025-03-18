const runtime = require('./lib/runtime')

module.exports = async function suspend() {
  const suspend = Promise.withResolvers()
  const idle = Promise.withResolvers()
  const resume = Promise.withResolvers()

  runtime(
    () => suspend.resolve(),
    () => idle.resolve(),
    (idled) => {
      if (idled === false) {
        idle.reject(new Error('Resumed before becoming idle'))
      }

      resume.resolve()
    }
  )

  await suspend.promise

  return {
    idle: () => idle.promise,
    resume: () => resume.promise
  }
}
