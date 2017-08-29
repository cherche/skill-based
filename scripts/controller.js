addEventListener('load', () => {
  const d = document
  const $body = d.body

  const render = (el, content) => {
    el.innerHTML = content
  }

  const $game = d.createElement('div')
  $game.className = 'game'

  const $next = d.createElement('button')
  $next.className = 'next'
  $next.textContent = 'next'
  $next.addEventListener('click', () => {
    render($game, stocks.map(({ change, value }) => {
      return JSON.stringify({
        change: change && change.base10,
        value: value.base10
      })
    }/*JSON.stringify(stock)*/).join('<br>'))
    phase()
  })

  $body.appendChild($game)
  $body.appendChild($next)
})
