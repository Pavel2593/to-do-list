import React from 'react'
import classes from './DefaultInput.module.scss'

const DefaultInput = (props) => {
    return (
        <input
            type="text"
            {...props}
            className={classes.input}
        />
    )
}

export default DefaultInput
