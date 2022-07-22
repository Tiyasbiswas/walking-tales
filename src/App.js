import './App.css';
import Header from './components/Header';
import Acitivity from './components/Activity';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header />
      <Acitivity/>
      <Footer/>
    </div>
  );
}

export default App;
