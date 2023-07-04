import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Services from './Services';
import Home from './Home';
import Contact from './Contact';
import Commercial from './Commercial';
import Residental from './Residental';
import Footer from './Footer';
import ResidentalCoquitlam1 from './ResidentalCoquitlam1';
import VancouverCondo from './VancouverCondo';
import KitchenReno from './KitchenReno';
import AlaskaHome from './AlaskaHome';
import ResidentalCoquitlam2 from './ResidentalCoquitlam2';
import Renovations from './Renovations';



function App() {
  return (
    <div className="App1">
      <div className="content">
        <Router>
          <Header />

          <div className="main">
            <Routes>
              <Route path="/Contact" element={<Contact />} />
              <Route path="/ResidentalCoquitlam1" element={<ResidentalCoquitlam1 />} />
              <Route path="/ResidentalCoquitlam2" element={<ResidentalCoquitlam2 />} />
              <Route path="/VancouverCondo" element={<VancouverCondo />} />
              <Route path="/" element={<Home />} />
              <Route path="/AlaskaHome" element={<AlaskaHome />} />
              <Route path="/KitchenReno" element={<KitchenReno />} />
              <Route path="/Renovations" element={<Renovations />} />
              <Route path="/Commercial" element={<Commercial />} />
              <Route path="/Residental" element={<Residental />} />
              <Route path="/Services" element={<Services />} />
            </Routes>
          </div>

        </Router>
          <Footer />
      </div>
    </div>
  );
}
export default App;