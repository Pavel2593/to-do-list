import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import About from '../../pages/About';
import Tasks from '../../pages/Tasks';


const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About/>} />
            <Route path='/' element={<Tasks/>} />
            {/* <Route path='*' element={<Navigate to='/' />} /> */}
        </Routes>
    )
}

export default AppRouter
