
import Typewriter from "typewriter-effect";
export default function Banner(){
return(
   <div>
    <div className="container-banner">
    <div className="row">
      {/* <div className="col-sm-6">
        <Main/>
      </div> */}
      {/* <div className="col-sm-6"> */}
      <Typewriter
       onInit={(typewriter)=>{
              typewriter.typeString("Walking Tales:")
              .pauseFor(1000)
              .deleteAll()
              .typeString(" Lets create a new journey Together").start();
       }
        } />
        {/* </div> */}

        {/* <div class = "container">
  <h1>Make stories while</h1>
  <h1>Exercising</h1>
</div> */}
  </div>
  </div>
  </div>
)}