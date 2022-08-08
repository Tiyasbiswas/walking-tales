
import Typewriter from "typewriter-effect";
export default function Banner(){
return(
   <div>
     <div className="container rounded shadow">
    <div className="container banner">
    <div className="row">
    
      <Typewriter
       onInit={(typewriter)=>{
              typewriter.typeString("Walking Tales:")
              .pauseFor(500)
              .deleteAll()
              .typeString("Let's create a new journey together...").start();
       }
        } />
       
  </div>
  </div>
  </div>
  </div>
)}