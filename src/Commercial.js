import React from 'react'
import './Commercial.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

export default function Commercial() {
  return (
    <div className='commericalPage'>
      <div> <h1>Commercial Property Projects</h1></div>
    <div className='commercial'>

      <div className='commercialBox1'>


      <Link to="/SBIBank">
      <div className='Projects1'>
        <div className='picture' id='picture1'></div>
        <div className='ProjectName'> <h3>SBI Bank Surrey</h3></div>
        </div>
        </Link>

      <Link to="/ICICIBank">
      <div className='Projects1'>
        <div className='picture'id='picture2'></div>
        <div className='ProjectName' > <h3>ICICI Bank Delta</h3></div>
      </div>
      </Link>

      <Link to="/Veerji">
      <div className='Projects1'>
        <div className='picture'  id='picture3'></div>
        <div className='ProjectName'> <h3>Veerji Fish and Grill</h3></div>
      </div>
      </Link>

      <Link to="/Gulley">
      <div className='Projects1'>
        <div className='picture' id='picture4'></div>
        <div className='ProjectName' ><h3>Gulley Canteen Coquitlam</h3>
        </div>
      </div>
      </Link>

      <Link to="/GoGrill">
      <div className='Projects1'>
        <div className='picture' id='picture5'></div>
        <div className='ProjectName' ><h3>Go Grill Abbotsford </h3></div>
      </div>
      </Link>

      <Link to="/MumbaiLocal">
      <div className='Projects1'>
        <div className='picture'  id='picture6'></div>
        <div className='ProjectName'> <h3>Mumbai Local</h3></div>
      </div>
      </Link>

      <Link to="/NYGrill">
      <div className='Projects1'>
        <div className='picture' id='picture7'></div>
        <div className='ProjectName' > <h3>NY Grill Langley</h3></div>
      </div>
      </Link>

      <Link to="/HiFive">
      <div className='Projects1'>
        <div className='picture' id='picture8'></div>
        <div className='ProjectName' > <h3>Hi Five Burnaby</h3></div>
      </div>
      </Link>

      <Link to="/RebelBoxing">
      <div className='Projects1'>
        <div className='picture' id='picture9'></div>
        <div className='ProjectName' > <h3>Rebel Boxing Studio Coquitlam</h3></div>
      </div>
      </Link>

      <Link to="/Notary">
      <div className='Projects1'>
        <div className='picture' id='picture10'></div>
        <div className='ProjectName' > <h3>Surrey Notary Office</h3></div>
      </div>
      </Link>


      </div>


    </div>
    </div>
  )
}
