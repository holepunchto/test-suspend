module.exports = function suspend(suspend, idle, resume) {
  process.once('beforeExit', onbeforeexit)

  function onbeforeexit() {
    try {
      idle()
    } finally {
      resume(true)
    }
  }

  suspend()
}
