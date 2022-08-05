import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { VictoryPie } from "victory-pie";
import { VictoryChart } from "victory-chart";
import { VictoryTooltip } from "victory-tooltip";



 function WorkoutHistory(props){
  const [value, onChange] = useState(new Date());

   const [data3, setData3] = useState([
    { x: "walking", y: 330 },
    { x: "Running", y: 180 },
    { x: "Swimming", y: 200 },
    { x: "Hiking", y: 120 },
    { x: "Dancing", y: 100 },
    { x: "cycling", y: 220 }

  ]);

  const [label, setLabel] = useState(false);

  const handleClick = () => {
    const updated = [...data3];
    updated[0].y += 700;

    console.log(updated);

    setData3(updated);
  };

  const handleToggler = () => {
    setLabel((val) => !val);
  };


return(
<>
<div><Header/></div>

     <div className='container'>
      <div>
        <p> Workout chart</p>
      <Calendar
        onChange={onChange}
        value={value}
      />
      </div>
      <VictoryPie
        padAngle={({ datum }) => 2}
        animate={{
          duration: 2000
        }}
        innerRadius={(val) => {
          console.log(val.datum);
          return val.datum.x === "x" ? 170 : 130;
        }}
        width="1200"
        tooltip={"dshv"}
        labelComponent={
          label ? <VictoryTooltip dy={0} centerOffset={{ x: 25 }} /> : undefined
        }
        colorScale={["tomato", "orange", "blue", "olive", "Green","brown"]}
        data={data3}
      />
      <button onClick={handleClick}>View toggle</button>
      <button onClick={handleToggler}>Excersize Type</button>
      </div>
<div><Footer/></div>
</>
 )
}

export default WorkoutHistory;



// <div className='tabhistory'>
// <Tabs forceRenderTabPanel defaultIndex={1}>
//     {/* <TabList>
      
//       <Tab>Daily</Tab>
//       <Tab>Weekly</Tab>
//     </TabList> */}
//     <TabPanel>
//       <Tabs forceRenderTabPanel>
//         {/* <TabList>
//           <Tab>CurrentDay</Tab>
//         </TabList> */}
//         <TabPanel>
//           {/* <p>{today}</p> */}
//           <p><img src="https://i.etsystatic.com/24785820/r/il/6fd684/3826900364/il_570xN.3826900364_jo4n.jpg" alt="Homer Simpson" /></p>
//           <p> 57 mins</p>
//         </TabPanel>
//       </Tabs>
//     </TabPanel>
//     <TabPanel>
//       <Tabs forceRenderTabPanel>
//         <TabList>
//           <Tab>Weekly</Tab>
//         </TabList>
//         <TabPanel>
//         <TableauReport
//       url="https://public.tableau.com/views/SectorVisualizationsGender/AssetOwnership?:language=en-GB&:display_count=n&:origin=viz_share_link"
//       filters={filters}
//       parameters={parameters} 
//       options={options}
//     />
//         </TabPanel>
//       </Tabs>
//     </TabPanel>
//   </Tabs>
// </div>