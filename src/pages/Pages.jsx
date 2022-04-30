import React from 'react'
import Home from './Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipes from './Recipes'
import { AnimatePresence } from 'framer-motion'

// This page for the routing 

function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={ location } key={ location.pathname }>
        <Route path='/' element={ <Home /> } />
        <Route path='/cuisine/:type' element={ <Cuisine /> } />
        <Route path='/searched/:search' element={ <Searched /> } />
        <Route path='/recipe/:name' element={ <Recipes /> } />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
