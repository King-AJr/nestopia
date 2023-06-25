import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './Components/Landingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AllListings from './Components/AllListings';
import AreaListings from './Components/AreaListings';
import AddListing from './Components/AddListing';
import SingleListing from './Components/SingleListing';
import Pairs from './Components/Pairs';
import SignIn from './Components/Login';
import SignUp from './Components/SignUp';


// import AreaListing from './Components/AreaListings';
// import AddListing from './Components/AddListing'

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/all_listings' element={<AllListings />} />
      <Route path='/area_listings/:major_area' element={<AreaListings/>} />
      <Route path='/add_listing' element={<AddListing />} />
      <Route path='/single_listing/:id' element={<SingleListing />} />
      <Route path='/view_pairs/:id' element={<Pairs/> } />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </Router>
    </>
    // <LandingPage/>
  );
}

export default App;
