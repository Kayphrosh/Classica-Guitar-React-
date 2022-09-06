// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import LandingPage from './components/landing/LandingPage';
import Donation from './components/Dontation/Donation';
import DonationForm from "./components/Dontation/DonationForm";
import Gallery from "./components/Gallery/Gallery";
import Gallery2018 from "./components/Gallery/Gallery2018";
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
      </Routes>
      {/* <LandingPage />
      <Donation /> */}
    </div>
  );
}

export default App;
