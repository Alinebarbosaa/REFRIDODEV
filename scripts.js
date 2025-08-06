let list = document.querySelectorAll('.item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

// count = 3
// 0, 1, 2
//
let count = list.length //3
let active = 0

next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active + 1
    list [active].classList.add('active')
}
prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')
}
