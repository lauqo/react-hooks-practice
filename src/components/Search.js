import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import {GithubContext} from '../context/github/githubContext'

export const Search = () => {

    const [value, setValue] = useState('')

    const {searchUsers, clearUsers} = useContext(GithubContext)
    const alert = useContext(AlertContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }
        clearUsers()
        if (value.trim()) {
            alert.hide()
            searchUsers(value.trim())
        } else {
            alert.show('Enter username!')
        }
    }

    return (
        <div className="form-group">
            <input type="text"
                   className="form-control"
                   placeholder="Enter username ..."
                   onKeyPress={onSubmit}
                   value={value}
                   onChange={event => setValue(event.target.value)} />
        </div>
    )
}