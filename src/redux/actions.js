import { INCREMENT, DECREMENT, INIT_APPLICATION, CHANGE_THEME } from "./types";

export function initApplication() {
    return {
        type: INIT_APPLICATION
    }
}

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function changeTheme(nextTheme) {
    return {
        type: CHANGE_THEME,
        payload: nextTheme
    }
}