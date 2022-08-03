import Header from './Header';
import Footer from './Footer';
import React, { useState, useContext, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import './styles.css';
import Capturetime from './Capturetime';
import LocationMarker from './LocationMarker';

import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function UserProfile() {
  const { user, setUser } = useContext(UserContext)

  const [latitude,setLatitude]=useState(0);
  const [longitude,setLongitude]=useState(0);
  const [setvalue, setSelvalue] = useState('');// option data value
  const [saveroute, setSaveroute] = useState({ Route_name: "", Route_Value: "" });
  const [showRouteWindow, setShowWindow] = useState(false);
  const [destination, setDestination] = useState([]);

  const navigate = useNavigate();

  useEffect(() =>{
      navigator.geolocation.getCurrentPosition((position)=>{
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      })
  },[]);

 const currentLoc  =  [latitude,longitude];
  //------------------------------------------------------------------
  const handleSelect = (e) => {
    setSelvalue(e);
  };
  console.log(" value set" + setvalue);

//------------------------------------------------------------------
  const handleSelectedRoutes = (event) => {
    setSaveroute(event.target.value);
  };

  //------------------------------------------------------------------
  const addnewroutes = (event) => {
    setSaveroute((prev) => ({ ...prev, [event.target.name]: destination}));
    console.log("saveroute: ", destination);
    navigate("/findpartner", { state: { startpoint: currentLoc, destinationpoint: destination } });
  };
//setValues({ ...values, [e.target.name]: e.target.value })

  //======================================/|\/|\=====================================================

  return (
    <>
      <Header />
      <div className='container rounded shadow'>
       
        <div className='findworkdistory'>
          <Button type="button">
            <Link to='/workouthistory'>Show History</Link>
          </Button>
        </div>


        <div className='container-class-user-profile'>

          <div className='row'>
            <div className='col-sm-6'>
              <div className="activity" style={{ paddingLeft: "80px", paddingRight: "90px" }} >
                <DropdownButton title="Choose Activity" id="menu-select-activity" onSelect={handleSelect} >
                  <Dropdown.Item eventKey="Walking">Walking</Dropdown.Item>
                  <Dropdown.Item eventKey="Yoga">Yoga</Dropdown.Item>
                  <Dropdown.Item eventKey="Swimming">Swimming</Dropdown.Item>
                  <Dropdown.Item eventKey="Hiking">Hiking</Dropdown.Item>
                  <Dropdown.Item eventKey="Cycling">Cycling</Dropdown.Item>
                </DropdownButton>
                <br />
                <h5><i>You have selected :: {setvalue}</i></h5>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='timercounter'>
                <Capturetime />
              </div>
            </div>
          </div>

          <h3>Welcome,{user.username}</h3>
          <div className='map-details'>
            <LocationMarker />
          </div>

          <div className='routes-activity-map'>
            <div className='row'>
              <div className='col-sm-6'>
                <DropdownButton title="Saved Routes" id="dropdown-menu-align-left" onSelect={handleSelectedRoutes} >
                  <Dropdown.Item eventKey="Necker" >Necker</Dropdown.Item>
                  <Dropdown.Item eventKey="WaltBierGarten">WaltBierGarten</Dropdown.Item>
                  <Dropdown.Item eventKey="Osterburg">Osterburg</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className='col-sm-6'>
                <Button type="button" id="addnew-routes-align-right" onClick={() => setShowWindow(true)} >
                  {/* <Button type="button" id="addnew-routes-align-right" onClick={addnewroutes} > */}
                  Add new Route
                </Button>

                {showRouteWindow && (
                  <div className='map-box  shadow rounded'>
                    <input type="text" name="start" value={currentLoc} autoComplete="off" />
                    <input type="text"   name="destination" value={destination} autoComplete="on" onChange={(e) => setDestination(e.target.value)}  />
                    <br/>
                    <Button style={{ background: "#94B49F"}} type="save" onClick={addnewroutes} >Save</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
