import React, {useReducer} from 'react'
import {AlertContext} from './alertContext'
import {alertReducer} from './alertReducers'
import {HIDE_ALERT, SHOW_ALERT} from '../actionTypes'

export const AlertState = ({children}) => {

    const [state, dispatch] = useReducer(alertReducer, null)

    const show = (text, type = 'secondary') => dispatch({type: SHOW_ALERT, payload: {type, text}})

    const hide = () => dispatch({type: HIDE_ALERT})

    return (
        <AlertContext.Provider value={{show, hide, alert: state}}>
            {children}
        </AlertContext.Provider>
    )
}