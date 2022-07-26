
import Typewriter from "typewriter-effect";

export default function Banner(){
return(
   <div>
    <div className="container-banner">
    <div className="row">
   
    {/* <div className="col-sm-6"> */}
      <Typewriter
       onInit={(typewriter)=>{
              typewriter.typeString("Walking Tales: Welcome to our Walking Journey ").start();
       }
        } />
 {/* </div> */}
    
  </div>
  </div>
  </div>
)}