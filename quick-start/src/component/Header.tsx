import React from 'react'
import { AppContext } from './Application'

const Header = ()=> {
    return (
        <AppContext.Consumer>
            {
                (name) => {
                    return <h1>Logged in as {name.name}</h1>
                }
            }
        </AppContext.Consumer>
    )
}

export default Header
