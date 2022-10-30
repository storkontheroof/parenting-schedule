import { createContext, useReducer, useContext } from 'react'

import * as settings from './app.settings'

const AppContext = createContext()

export const STATE_ACTIONS = {
    ADD: 'add',
}

const stateReducer = (state, action) => {
    switch (action.type) {
        case STATE_ACTIONS.ADD:
            return {
                ...state,
            }

        default:
            throw new Error(`Action of type '${action.type}' not implemented.`)
    }
}

const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stateReducer, { ...settings })

    console.log({ state })

    const value = { state, dispatch }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error(
            'You should wrap useAppContext within the ContextProvider'
        )
    }

    return context
}

export { AppContextProvider, useAppContext }
