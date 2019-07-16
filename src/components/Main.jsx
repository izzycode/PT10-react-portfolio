import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'

const Main = (props) => {
  return (
    <BrowserRouter>
      <Route path="/home" component={ Home }/>
      <Route path="/about" component={ About }/>
      <Route path="/projects" component={ Projects }/>
      <Route path="/drink/:drinkId" component={ Home }/>
    </BrowserRouter>
  )
}

export default Main
