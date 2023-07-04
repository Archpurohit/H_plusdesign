import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; import Header from './Header';
import Services from './Services';
import Home from './Home';
import Contact from './Contact';
import Commercial from './Commercial';
import Residental from './Residental'; import Footer from './Footer'; import ResidentalCoquitlam1 from './ResidentalCoquitlam1'; import VancouverCondo from './VancouverCondo'; import KitchenReno from './KitchenReno'; import AlaskaHome from './AlaskaHome'; import ResidentalCoquitlam2 from './ResidentalCoquitlam2'; import Renovations from './Renovations'; import SBIBank from './SBIBank'; import ICICIBank from './ICICIBank'; import Veerji from './Veerji'; import Gulley from './Gulley';
import GoGrill from './GoGrill';
import MumbaiLocal from './MumbaiLocal';
import NYGrill from './NYGrill';
import RebelBoxing from './RebelBoxing';
import Notary from './Notary';
import HiFive from './HiFive';


function App() {
  return (
    <div className="App1">
      <div className="content">
        <Router>
          <Header />

          <div className="main">
            <Routes>
              {/* home page links */}
              <Route path="/" element={<Home />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Commercial" element={<Commercial />} />
              <Route path="/Residental" element={<Residental />} />
              <Route path="/Contact" element={<Contact />} />

              {/* Residentail links */}
              <Route path="/ResidentalCoquitlam1" element={<ResidentalCoquitlam1 />} />
              <Route path="/ResidentalCoquitlam2" element={<ResidentalCoquitlam2 />} />
              <Route path="/VancouverCondo" element={<VancouverCondo />} />
              <Route path="/AlaskaHome" element={<AlaskaHome />} />
              <Route path="/KitchenReno" element={<KitchenReno />} />
              <Route path="/Renovations" element={<Renovations />} />

              {/* Commerical links */}
              <Route path="/SBIBank" element={<SBIBank />} />
              <Route path="/ICICIBank" element={<ICICIBank />} />
              <Route path="/Veerji" element={<Veerji />} />
              <Route path="/Gulley" element={<Gulley />} />
              <Route path="/GoGrill" element={<GoGrill />} />
              <Route path="/MumbaiLocal" element={<MumbaiLocal />} />
              <Route path="/NYGrill" element={<NYGrill />} />
              <Route path="/HiFive" element={<HiFive />} />
              <Route path="/RebelBoxing" element={<RebelBoxing />} />
              <Route path="/Notary" element={<Notary />} />
            </Routes>
          </div>

        </Router>
          <Footer />
      </div>
    </div>
  );
}
export default App;