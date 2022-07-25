import './App.css';
import Header from './components/Header';
import Acitivity from './components/Activity';
import Banner from './components/Banner';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Banner/>
      <Acitivity/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;