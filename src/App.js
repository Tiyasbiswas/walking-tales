import './App.css';
import Header from './components/Header';
import Activity from './components/Activity';
import Banner from './components/Banner';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Map from './components/Map'
import LocationMarker from './components/LocationMarker'


function App() { 
  return (
    <div className="App">
     
     
      <Header/>
     
      <Banner/>
     
      <Activity/>
     
     
      <LocationMarker />
      <Footer/>
      
     
      
    </div>

  );
}

export default App;
