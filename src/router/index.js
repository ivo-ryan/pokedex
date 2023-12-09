import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { Profile } from '../pages/profile'


export const Router = () => {
  
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/profile/:id" element={<Profile />}/>
            </Routes>
        </BrowserRouter>
    )
}