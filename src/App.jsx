import Client from "./Clients";
import Employees from "./employees";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function(){
  return(
    <div>
      <Navbar/>
      <Employees/>
      <Client/>
      <Footer/>
    </div>
  )
}