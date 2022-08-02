import './App.css';
import Header from './components/Header';
import Activity from './components/Activity';
import Banner from './components/Banner';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home() { 
  return (
    <div >

      <Header/>
      <br/>
      <Banner/>
     <Activity/>
      <Footer/>      
    </div>

  );
}

export default Home;
