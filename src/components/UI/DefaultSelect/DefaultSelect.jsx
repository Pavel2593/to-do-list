import React, { useState } from 'react'
import classes from './DefaultSelect.module.scss'

const DefaultSelect = ({ sortTask, defaultValue, options }) => {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedName, setSelectedName] = useState(defaultValue)
    
    const selectOption = (value, name) => {
        setSelectedName(name);
        sortTask(value);
        setShowOptions(false);
    }

    return (
        <div className={showOptions ? classes.active : ''}>
            <div
                className={classes.select}
                onClick={() => setShowOptions(!showOptions)}
            >
                {selectedName}
            </div>
            <div className={classes.options}>
                {
                    (showOptions) &&
                    options.map((option) => (
                        <div 
                        key={option.value} 
                        className={classes.option}
                        onClick={() => selectOption(option.value, option.name)}
                        >
                            {option.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DefaultSelect