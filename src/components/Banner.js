
import Typewriter from "typewriter-effect";

export default function Banner(){
return(
   <div>
    <div className="container-banner">
    <div className="row">
      <Typewriter
       onInit={(typewriter)=>{
              typewriter.typeString("Walking Tales:")
              .pauseFor(1000)
              .deleteAll()
              .typeString(" Lets create a new journey Together").start();
       }
        } />
  </div>
  </div>
  </div>
)}