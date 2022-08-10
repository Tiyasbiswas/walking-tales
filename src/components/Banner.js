
import Typewriter from "typewriter-effect";
export default function Banner(){

return(
   <div>
     <div className="container rounded shadow">
    <div className="row" style={{ fontWeight: "light", fontSize: "24px", fontfamily: 'monospace' }}> 
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
)}