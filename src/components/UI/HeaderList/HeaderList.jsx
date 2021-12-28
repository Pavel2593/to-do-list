import React from 'react'
import cl from './HeaderList.module.scss'

const HeaderList = ({ children, ...props }) => {
    return (
        <div className={cl.headerList}>
            {children}
        </div>
    )
}

export default HeaderList