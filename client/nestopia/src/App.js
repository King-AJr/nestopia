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
import { AuthProvider } from './Context/AuthProvider';
import Auth from './Components/AuthChecker';
import Messaging from './Components/Messaging';


// import AreaListing from './Components/AreaListings';
// import AddListing from './Components/AddListing'

function App() {
  return (
    <>
    <Router>
      <AuthProvider>
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/all_listings' element={<AllListings />} />
      <Route path='/area_listings/:major_area' element={<AreaListings/>} />
      <Route element={<Auth/>}>
        <Route path='/add_listing' element={<AddListing />} />
        <Route path='/view_pairs/:id' element={<Pairs/> } />
        <Route path='/message/:id' element={<Messaging/>} />
      </Route>
      <Route path='/single_listing/:id' element={<SingleListing />} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      </Routes>
      </AuthProvider>
    </Router>
    </>
    // <LandingPage/>
  );
}

export default App;
