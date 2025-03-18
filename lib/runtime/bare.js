module.exports = function suspend(suspend, idle, resume) {
  Bare.once('suspend', onsuspend).once('idle', onidle).once('resume', onresume)
  Bare.suspend()

  let idled = false

  function onsuspend() {
    suspend()
  }

  function onidle() {
    idled = true
    try {
      idle()
    } finally {
      Bare.resume()
    }
  }

  async function onresume() {
    if (idled === false) Bare.off('idle', onidle)
    resume(idled)
  }
}
