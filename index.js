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

buttonDrugi.addEventListener('click', function() {
    console.log('test2')

    if (paragraf.innerHTML === 'ORION' || paragraf.innerHTML.startsWith('ORI') == true) {
        paragraf.classList.toggle('orange')
    } else {
        paragraf.classList.toggle('none')
    }
    // if (paragraf.innerHTML.startsWith('ORI') == true) {
    //     paragraf.classList.toggle('orange')

    // }

})

// buttonDrugi.addEventListener('click', function() {
//     console.log('test2')

//     // if (paragraf.innerHTML === 'ORION') {
//     //     paragraf.classList.toggle('orange')
//     // } else {
//     //     paragraf.classList.toggle('none')
//     // }
//     if (paragraf.innerHTML.startsWith('ORI') == true) {
//         paragraf.classList.toggle('orange')

//     }

// })



// console.log('maciek'.startsWith('m'))

// if ('maciek'.startsWith('m') === true) {
//     paragraf.classList.toggle('orange')
// } else {
//     paragraf.classList.toggle('none')
// }
// console.log('ORION'.startsWith('ORI'))
// console.log(paragraf.innerHTML.startsWith('ORI'))

/////////////////////////////////////////////

// buttonDrugi.addEventListener('click', function() {
//     console.log('test2')

//     if (paragraf.innerHTML.startsWith('ORI') == true) {
//         paragraf.classList.toggle('orange')
//     }
// })

/////////////////////////////////////////////




// if ('ORION'.startsWith('ORI') === true) {
//     paragraf.classList.toggle('orange')
// } else {
//     paragraf.classList.toggle('none')
// }


// buttonDrugi.addEventListener('click', function() {
//             console.log('test2')

//             if (paragraf.innerHTML.startsWith('ORI') == true || paragraf.innerHTML === 'ORION') {
//                 paragraf.classList.toggle('orange')

//                 // } else {
//                 //     paragraf.classList.toggle('none')
//                 // }

//             }