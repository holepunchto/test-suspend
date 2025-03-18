module.exports = function suspend(suspend, idle, resume) {
  process.prependOnceListener('beforeExit', onbeforeexit)

  function onbeforeexit() {
    try {
      idle()
    } finally {
      resume(true)
    }
  }

  suspend()
}
