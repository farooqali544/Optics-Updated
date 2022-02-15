import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {

    const navigate = useNavigate();

  return <div className="home">



<section className='brandingName'>
<h1 className='title'>Eye Care Optics</h1>
{/* 
      <div className="addButton">
      <button onClick={()=>{navigate("/add")}}>Add Data</button>
      </div>


      <div className="previewButton">
      <button onClick={() =>{navigate("/preview")}}>Preview Data</button>
      </div>
 */}



 {/* Buttons */}

 <button class="glow-on-hover" type="button" onClick={()=>{navigate("/add")}}>Add Data</button>


 <button class="glow-on-hover" type="button" onClick={() =>{navigate("/preview")}}>Preview Data</button>


</section>
  </div>;
};

export default Home;
