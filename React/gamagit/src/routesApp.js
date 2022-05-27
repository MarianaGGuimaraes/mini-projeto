import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './Pages/home';
import Repositories from './Pages/repositories';

export default function RouteApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/repositories' element={<Repositories/>} />
        </Routes>
        </BrowserRouter>
    )
}