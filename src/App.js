import './App.css';
import Header from './components/Header';
import Acitivity from './components/Activity';
import Banner from './components/Banner';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Map from './components/Map'


function App() { 
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
      <br/><br/>
      <Banner/>
      <Map />
      <br/><br/><br/>
      <Acitivity/>
      <br/><br/><br/>
      <br/><br/><br/>
      <Footer/>
      <Routes>
        <Route path='/userprofile' element={<Map/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
