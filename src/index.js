import './styles.css'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './redux/rootReducer'
import { initApplication, increment, decrement, changeTheme } from './redux/actions'

function addClickListener(object, callback) {
    object.addEventListener('click', () => {
        callback()
    })
}

const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const themeBtn = document.querySelector('#theme')
const counter = document.querySelector('#counter')

function logger(state) {
    return function(next) {
        return function(action) {
            console.log(action)
            return next(action)
        }
    }
}

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
window.store = store

store.subscribe(() => {
    console.log(store.getState())
    counter.textContent = store.getState().counter
    document.body.className = store.getState().theme.value
})

store.dispatch(initApplication())

addClickListener(addBtn, () => {
    store.dispatch(increment())
})
addClickListener(subBtn, () => {
    store.dispatch(decrement())
})
addClickListener(themeBtn, () => {
    store.dispatch(changeTheme(
        document.body.classList.contains('light')
            ? 'dark'
            : 'light'
    ))
})
