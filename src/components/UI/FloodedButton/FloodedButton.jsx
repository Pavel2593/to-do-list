import React from 'react'
import classes from './FloodedButton.module.scss'


const FloodedButton = ({ children, ...props}) => {
    return (
        <button className={classes.button} {...props}>
            {children}
        </button>
    )
}


export default FloodedButton
