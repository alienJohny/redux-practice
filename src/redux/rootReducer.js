import { INCREMENT, DECREMENT, CHANGE_THEME } from './types'
import { combineReducers } from 'redux'

const initialThemeState = {
    value: 'light'
}

export function counterReducer(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

export function themeReducer(state = initialThemeState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                value: action.payload
            } 
        default: return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})