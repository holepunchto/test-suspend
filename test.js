const test = require('brittle')
const suspend = require('.')

test('basic', async (t) => {
  const s = await suspend()
  t.pass('suspended')

  await s.idle()
  t.pass('became idle')

  await s.resume()
  t.pass('resumed')
})
