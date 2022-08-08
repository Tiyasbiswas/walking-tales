import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Footer from './Footer';

export default function About() {
  return (
<>
<Header/>
<div className='container-about'>
 <div className='row p-4 p-md-5'>
    <div className='col-md-4'>
    <img src=""/>
    </div>
    <div className='col-md-4'>
        <p> WalkingTales might seem like a Story but its started from introvert weightt loss journey. 
            You might even wonder what is there in this about page.</p>
<p>
            WalkingTales began on the campus of the Bootcamp of Berlin by the hand of the Bootcamps's instructor, Chrishtopher Selley. 


            but WalkingTales is all about the creating a better life in this climate change with creating new frinds in your being healthy journey Stay healthy Stay happy !!</p>
     </div>
 </div>
</div>
<Footer/>
</>



  );
}
