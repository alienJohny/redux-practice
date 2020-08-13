import './styles.css'

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

let state = 0

function render() {
    counter.textContent = state.toString()
}

function addClickListener(object, callback, toRender=true) {
    object.addEventListener('click', () => {
        callback()
        if (toRender) {
            render()
        }
    })
}

addClickListener(addBtn, () => { state++ })
addClickListener(subBtn, () => { state-- })
addClickListener(asyncBtn, () => {
    setTimeout(() => {
        state++
        render()
    }, 2000)
})
addClickListener(themeBtn, () => {
    document.body.classList.toggle('dark')
})

render()
