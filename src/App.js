// styles
import './App.css';
// react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// For auth purposes
import useAuth from './Hooks/Authentication/useAuth';
// pages
import Homepage from './Pages/Homepage/homePage';
import Navbar from './Navbar/navbar';
import ContactUs from './Pages/Contactus/contactUs';
import Modules from './Pages/Modules/modules';
import FileUpload from './Pages/FileUpload/fileUpload';
import Footer from './Footer/footer';
import ChartsPage from './Pages/ChartsPage/chartsPage';
import Sponsors from './Pages/Sponsors/sponsors';
import Login from './Pages/Authentication/Login/login';
import Signup from './Pages/Authentication/Signup/signup';
import { useSelector } from 'react-redux';
import { selectUser } from './Redux/Slices/userSlice';

function App() {

  // To get the login status of the user
  useAuth();

  // To see if changes are reflected or not?
  const newUser = useSelector(selectUser);
  console.log('user => ' ,newUser);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign_up' element={<Signup/>}/>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/modules' element={<Modules/>}/>
        <Route path='/file_upload/:module' element={<FileUpload/>}/>
        <Route path='/charts_page' element={<ChartsPage/>}/>
        <Route path='/sponsorship' element={<Sponsors/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
