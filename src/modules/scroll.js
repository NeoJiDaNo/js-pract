const scroll = function () {
    const menu = document.querySelector('menu')
    const ul = menu.querySelector('ul')
    const anchors = ul.querySelectorAll('a')
    const main = document.querySelector('main')
    const a = main.querySelector('a')

    a.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = a.getAttribute('href')
        
        document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
            })
        })
    }
}

export default scroll