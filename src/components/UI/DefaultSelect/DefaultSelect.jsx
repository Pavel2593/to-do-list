import React, { useState } from 'react'
import cl from './DefaultSelect.module.scss'

const DefaultSelect = ({ returnValueFunction, defaultValue, options, className }) => {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedName, setSelectedName] = useState(defaultValue)
    
    const selectOption = (value, name) => {
        setSelectedName(name);
        returnValueFunction(value);
        setShowOptions(false);
    }

    const classesList = [className];
    if (showOptions) {
        classesList.push(cl.active)
    }

    return (
        <div className={classesList.join(' ')}>
            <div
                className={cl.select}
                onClick={() => setShowOptions(!showOptions)}
            >
                {selectedName}
            </div>
            <div className={cl.options}>
                {
                    (showOptions) &&
                    options.map((option) => (
                        <div 
                        key={option.value} 
                        className={cl.option}
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