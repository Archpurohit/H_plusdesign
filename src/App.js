import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Services from './Services';
import Home from './Home';


function App() {
  return (
    <div className="App1">
      <Router>
        <Header />

        <div>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
