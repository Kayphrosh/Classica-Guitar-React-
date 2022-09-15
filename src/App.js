// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Donation from './components/Dontation/Donation';
import DonationForm from './components/Dontation/DonationForm';
import Gallery from './components/Gallery/Gallery';
import Gallery2018 from './components/Gallery/Gallery2018';
import Gallery2019 from './components/Gallery/Gallery2019';
import Gallery2021 from './components/Gallery/Gallery2021';
import Gallery2022 from './components/Gallery/Gallery2022';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/donation" element={<Donation />}></Route>
        <Route path="/donation_form" element={<DonationForm />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/gallery/gallery2018" element={<Gallery2018 />}></Route>
        <Route path="/gallery/gallery2019" element={<Gallery2019 />}></Route>
        <Route path="/gallery/gallery2021" element={<Gallery2021 />}></Route>
        <Route path="/gallery/gallery2022" element={<Gallery2022 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
