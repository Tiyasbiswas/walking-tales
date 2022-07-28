import Header from './Header';
import Footer from './Footer';
import React,{useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import './styles.css'; 
import Capturetime from './Capturetime';
import LocationMarker from './LocationMarker';

export default function UserProfile(){

     
  const [setvalue,setSelvalue]=useState('');
  const [saveroute, setSaveroute] = useState(0);

  const handleSelect=(e)=>{console.log(e);setSelvalue(e)};
  
  const handleSelectedRoutes=(event)=>{      
    console.log(event);
    setSaveroute(event)
  };

  const addnewroutes = (event) => {
    event.preventDefault();
    console.log('The link was clicked.');
    setSaveroute(prev=>({...prev,}));
    console.log(saveroute)
  };
    return (
        <>
        <div>
            <Header />
            </div>
            <div className="container-activity">
      <div className='row'>
      <DropdownButton alignLeft
      title="Choose Activity"
      id="dropdown-menu-align-left"
      onSelect={handleSelect} >
              <Dropdown.Item eventKey="Walking">Walking</Dropdown.Item>
              <Dropdown.Item eventKey="Yoga">Yoga</Dropdown.Item>
              <Dropdown.Item eventKey="Swimming">Swimming</Dropdown.Item>
      </DropdownButton>
      <h4>You have selected {setvalue}</h4>
      </div>
      <div className='timercounter'>
        <Capturetime/>
      </div>
    </div>

   <div className='map-details'>
    <LocationMarker/>
   </div>

  <div className='routes-activity-map'>
  <DropdownButton alignLeft title="Saved Routes" id="dropdown-menu-align-left" onSelect={handleSelectedRoutes} >
              <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
      </DropdownButton>
  </div>
  <div className='addroutes'>
  <Button type="button" id="addnew-routes-align-right" onClick={addnewroutes}>
         Add new Route
  </Button>
  </div>
            <div>
            <Footer />
        </div>
        </>
    )
}
