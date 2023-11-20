import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Integrated from '../IntergatedFirstPage/Integrated'
import Admission from '../LandingPage/NavbarHoverData/Admission'
import Navbar from '../LandingPage/Navbar'
import RegisteInteg from '../IntergatedFirstPage/RegisteInteg'


const AllRoutes = () => {
  return (
    <Routes>
           <Route path='/' element={ <Navbar/>}/>
      
        <Route path='/integrated-first-degree' element={<Integrated/>}/>
        <Route path='/regintegrated' element={<RegisteInteg/>}/>
    </Routes>
  )
}

export default AllRoutes