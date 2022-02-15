import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {

    const navigate = useNavigate();

  return <div className="home">



<h1 className='title'>Eye Care Optics</h1>
<section className='brandingName'>

 <button class="glow-on-hover" type="button" onClick={()=>{navigate("/add")}}>Add Data</button>


 <button class="glow-on-hover" type="button" onClick={() =>{navigate("/preview")}}>Preview Data</button>


</section>
  </div>;
};

export default Home;
