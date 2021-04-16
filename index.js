let buttonPierwszy = document.querySelector('.one')
let buttonDrugi = document.querySelector('.two')
let paragraf = document.querySelector('.paragraf')

buttonPierwszy.addEventListener('click', function() {
    console.log('test1')

    if (paragraf.innerHTML === 'ORION') {
        paragraf.innerHTML = 'BABA'
    } else {
        paragraf.innerHTML = 'ORION'
    }

})

// buttonDrugi.addEventListener('click', function() {
//     console.log('test2')

//     if (paragraf.innerHTML === 'ORION' || "ORION".startsWith('ORI') == true) {
//         paragraf.classList.toggle('orange')
//     } else {
//         paragraf.classList.toggle('none')
//     }
//     if (paragraf.innerHTML === 'BABA') {
//         paragraf.classList.toggle('orange')

//     }

// })


buttonDrugi.addEventListener('click', function() {
    console.log('test2')

    if (paragraf.innerHTML === 'ORION' || "ORION".startsWith('ORI') == true) {
        paragraf.classList.toggle('orange')
    }
    if (paragraf.innerHTML === 'BABA') {
        paragraf.classList.add('none')
    }

})