import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function WorkoutHistory(){
  const [value, onChange] = useState(new Date());

return(
<>
<div><Header/></div>

<div className='tabhistory'>
<div>
      <Calendar
        onChange={onChange}
        value={value}
      /></div>
<Tabs forceRenderTabPanel defaultIndex={1}>
    <TabList>
      
      <Tab>Daily</Tab>
      <Tab>Weekly</Tab>
    </TabList>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>CurrentDay</Tab>
        </TabList>
        <TabPanel>
          <p>Day name date </p>
          <p><img src="https://i.etsystatic.com/24785820/r/il/6fd684/3826900364/il_570xN.3826900364_jo4n.jpg" alt="Homer Simpson" /></p>
          <p> 57 mins</p>
        </TabPanel>
      </Tabs>
    </TabPanel>
    <TabPanel>
      <Tabs forceRenderTabPanel>
        <TabList>
          <Tab>Weekly</Tab>
        </TabList>
        <TabPanel>
          <p> Week 1 (range)</p>
           {/* total calory map analytics Sum */}
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
</div>
<div><Footer/></div>
</>
 )
}




  // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  // const todaysDate = new Date();
  // let day = weekday[todaysDate.getDay()];