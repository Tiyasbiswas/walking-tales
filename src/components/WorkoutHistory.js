import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TableauReport from "tableau-react";


const options = {
  height: 800,
  width: 800,
  hideTabs: false
  // All other vizCreate options are supported here, too
  // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
};

const filters = {
  Colors: ["Blue", "Red"],
  Sizes: ["Small", "Medium"]
};

const parameters = {
  Param1: "Value",
  Param2: "Other Value"
};

 function WorkoutHistory(props){
  const [value, onChange] = useState(new Date());

  const today = new Date(),
   date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


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
    {/* <TabList>
      
      <Tab>Daily</Tab>
      <Tab>Weekly</Tab>
    </TabList> */}
    <TabPanel>
      <Tabs forceRenderTabPanel>
        {/* <TabList>
          <Tab>CurrentDay</Tab>
        </TabList> */}
        <TabPanel>
          {/* <p>{today}</p> */}
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
        <TableauReport
      url="https://public.tableau.com/views/SectorVisualizationsGender/AssetOwnership?:language=en-GB&:display_count=n&:origin=viz_share_link"
      filters={filters}
      parameters={parameters} 
      options={options}
    />
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
</div>
<div><Footer/></div>
</>
 )
}

export default WorkoutHistory;