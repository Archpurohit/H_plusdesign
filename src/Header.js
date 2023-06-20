import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Link, Route, Switch, Routes } from 'react-router-dom';



export default function Header() {
  return (
<div className="App">
      <header className="App-header">
        <div>  <h1 className="title">H Plus Design Inc.</h1> </div>

          <div className='right-header'>
            <div className='header-clicks'><Link to="/">Home</Link></div>
            <div className='header-clicks'>Commercial Projects</div>
            <div className='header-clicks'>Residencial Projects</div>
            <div className='header-clicks'><Link to="/services">Services</Link> </div>
            <div className='header-clicks'><Link to="/Contact">Contact</Link></div>
          </div>

      </header>
    </div>
  )
}
