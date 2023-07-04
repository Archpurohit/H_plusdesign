import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Services from './Services';
import Home from './Home';
import Contact from './Contact';
import Commercial from './Commercial';
import Residental from './Residental';
import Footer from './Footer';

function App() {
  return (
    <div className="App1">
      <div className="content">
        <Router>
          <Header />

          <div className="main">
            <Routes>
              <Route path="/Contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
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