import Header from './Header';
import Footer from './Footer';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import './styles.css';
import Capturetime from './Capturetime';
import LocationMarker from './LocationMarker';

export default function UserProfile() {

  const [setvalue, setSelvalue] = useState('');// option data value
  const [saveroute, setSaveroute] = useState({
    routename:"",
    duration: ""
  }); // seting the routes

  // const [showhide, setShowhide]=useState(false);//showhide 
  
  // const handleshowhide=(event)=>{
  //   const getuserselectedvalue = event.target.value;    
  //   setShowhide(getuserselectedvalue);

  // }


  const handleSelect = (e) => {
    console.log(e);
    setSelvalue(e);
  };
  console.log(" value set" + setvalue)

  const handleSelectedRoutes = (event) => {
    console.log(event);
    setSaveroute(event)
  };

  const addnewroutes = (event) => {
    event.preventDefault();
    console.log('The link was clicked.');
    setSaveroute((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    console.log("saveroute: ", saveroute);
  };
  return (
    <>
      <Header />
      <div className='container rounded shadow'>
      {/* <div className='findworkdistory'>
      <Button type="button">
            Show History
      </Button>
      </div> */}
      <div className='container-class-user-profile'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className="activity" style={{ paddingLeft: "80px", paddingRight: "90px" }} >
              <DropdownButton  title="Choose Activity" id="menu-select-activity" onSelect={handleSelect} >
                <Dropdown.Item eventKey="Walking">Walking</Dropdown.Item>
                <Dropdown.Item eventKey="Yoga">Yoga</Dropdown.Item>
                <Dropdown.Item eventKey="Swimming">Swimming</Dropdown.Item>
                <Dropdown.Item eventKey="Hiking">Hiking</Dropdown.Item>
                <Dropdown.Item eventKey="Cycling">Cycling</Dropdown.Item>
              </DropdownButton>
              <br/>
              <h5><i>You have selected :: {setvalue}</i></h5>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='timercounter'>
              <Capturetime />
            </div>
          </div>
        </div>


        <div className='map-details'>
          <LocationMarker />
        </div>

        <div className='routes-activity-map'>
          <div className='row'>
            <div className='col-sm-6'>
            <DropdownButton title="Saved Routes" id="dropdown-menu-align-left" onSelect={handleSelectedRoutes} >
              <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
              <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
              <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
            </DropdownButton>
             </div>
       

          <div className='col-sm-6'>
            <Button type="button" id="addnew-routes-align-right" onClick={addnewroutes}>
              Add new Route
            </Button>
          </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
