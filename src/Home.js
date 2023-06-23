import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Link, Route, Switch, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons';
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { faTape } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <div>
    <div className='center'>
      <div className='home' >
        <div className='profilePic'></div>
        <div className='Name'>Harshada Naik</div>




      </div>
        <div className='welcome'><h4 id='welcome1'>Welcome to our website, where art and architecture intertwine to create extraordinary spaces. As a passionate interior designer and architect, we bring your visions to life, transforming ordinary places into captivating environments. With meticulous attention to detail and a keen eye for aesthetics, we strive to create harmonious designs that reflect your unique style and enhance the way you live. Explore our portfolio and let us embark on a journey of creativity, craftsmanship, and endless possibilities. Discover the beauty of bespoke design and let us redefine your space into a work of art.</h4>
        <div><button className="button-42" onClick={() => window.location.href = "/Contact"}>Contact Me</button></div>
        </div>



      </div>
      <div className='Commercialhome'>
      <div className='CompicturesHome'>
      <div className='commercialBox'>

<div className='Projects'>
  <div className='ProjectName'>SBI Bank Surrey</div>
  <div className='picture' id='pic1'></div>
</div>

<div className='Projects'>
  <div className='ProjectName'>ICICI Bank Delta</div>
  <div className='picture' id='pic2'></div>
</div>

<div className='Projects'>
  <div className='ProjectName'>Veerji Fish and Grill</div>
  <div className='picture' id='pic3'></div>
</div>

<div className='Projects'>
  <div className='ProjectName'>Gulley Canteen Coquitlam</div>
  <div className='picture' id='pic4'></div>
</div>


</div>
      </div>
         <div className='icons'> <FontAwesomeIcon icon={faCompassDrafting} /><FontAwesomeIcon icon={faTape} /> <FontAwesomeIcon icon={faRulerCombined} /></div>

      <div className='ComWords'><h2>
        As a commercial interior designer, I specialize in transforming businesses into captivating
        environments that blend creativity, functionality, and aesthetics. With a deep understanding of
        clients' unique needs, I create innovative designs that optimize space and enhance productivity.
         From offices to retail stores, restaurants, and hotels, I capture brand identity and deliver
         exceptional results. With meticulous attention to detail and a passion for inspiring design,
         I bring commercial visions to life, leaving a lasting impact.</h2>
         <div><button className="button-42" onClick={() => window.location.href = "/Commercial"}>Commercial Properties</button></div>
         </div>
     </div>

     <div>Residental Home page</div>
    </div>
  );
}
