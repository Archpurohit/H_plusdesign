import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Link, Route, Switch, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompassDrafting } from '@fortawesome/free-solid-svg-icons';
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { faTape } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <div className='body'>
      <div className='center'>
        <div className='home' >
          <div className='profilePic'></div>
          <div className='Name'>Harshada Naik</div>




        </div>
        <div className='welcome'>< h4  id='welcome1'>Welcome to our website, where art and architecture intertwine to create extraordinary spaces. As a passionate interior designer and architect, we bring your visions to life, transforming ordinary places into captivating environments. With meticulous attention to detail and a keen eye for aesthetics, we strive to create harmonious designs that reflect your unique style and enhance the way you live. Explore our portfolio and let us embark on a journey of creativity, craftsmanship, and endless possibilities. Discover the beauty of bespoke design and let us redefine your space into a work of art.</ h4 >
          <div><button className="button-42" onClick={() => window.location.href = "/Contact"}>Contact Me</button></div>
        </div>



      </div>
      {/* <div> <h1>Commercial Property Projects</h1></div>
      <div className='Commercialhome'>


        <div className='commercialBox'>

          <div className='Projects'>
            <div className='picture2' id='pic1'></div>
            <div className='ProjectName1'> < h4 className='titleHome' >SBI Bank Surrey</ h4 ></div>
          </div>

          <div className='Projects'>
            <div className='picture2' id='pic2'></div>
            <div className='ProjectName1'>< h4 className='titleHome'  >ICICI Bank Delta</ h4 ></div>
          </div>

          <div className='Projects'>
            <div className='picture2' id='pic3'></div>
            <div className='ProjectName1'>< h4 className='titleHome' >Veerji Fish and Grill</ h4 ></div>
          </div>

          <div className='Projects'>
            <div className='picture2' id='pic4'></div>
            <div className='ProjectName1'>< h4 className='titleHome' >Gulley Canteen Coquitlam</ h4 ></div>
          </div>


        </div> */}

        {/* <div className='icons'> <FontAwesomeIcon icon={faCompassDrafting} /><FontAwesomeIcon icon={faTape} /> <FontAwesomeIcon icon={faRulerCombined} /></div>

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

      <div className='ResidentalTitle'> <h1>Residental Properties</h1></div>
      <div className='ResidentalHome'>
        <div className='residentalflexbox'>
          <div className='ResiFlex'>

            <div className='ResidentalProjects'>
              <div className='Residentalpicture2' id='pic11'></div>
              <div className='ResidentalProjectName'>< h4 className='titleHome'  >Coquitlam Site</ h4 ></div>
            </div>

            <div className='ResidentalProjects'>
              <div className='Residentalpicture2' id='pic21'></div>
              <div className='ResidentalProjectName'>< h4 className='titleHome' >Condo Renovation Vancouver</ h4 ></div>
            </div>

            <div className='ResidentalProjects'>
              <div className='Residentalpicture2' id='pic31'></div>
              <div className='ResidentalProjectName'>< h4 className='titleHome' >Kitchen Renovation Surrey</ h4 ></div>
            </div>

            <div className='ResidentalProjects'>
              <div className='Residentalpicture2' id='pic41'></div>
              <div className='ResidentalProjectName'>< h4 className='titleHome' >Alaska Family Home</ h4 ></div>
            </div>
          </div>

          <div className='ResiWords'><h2>
            Experienced and creative residential interior designer with a keen eye
            for detail and a passion for creating stylish, functional, and personalized spaces.
            With a track record of transforming residential properties into inviting homes,
            I excel in capturing clients' vision and translating it into captivating design concepts.
            Through a meticulous approach, I curate color schemes, select furniture and decor, and
            incorporate lighting solutions to enhance the aesthetic appeal and functionality of each room.
            With a strong understanding of space utilization, I strive to optimize layouts and maximize storage
            options, I collaborate closely with homeowners to bring their dream homes to life,
            exceeding expectations with my innovative designs and impeccable execution.</h2>
            <div><button className="button-42" onClick={() => window.location.href = "/Residental"}>Residental Properties</button></div></div>
        </div>

 */}





      </div>
    // </div>
  );
}
