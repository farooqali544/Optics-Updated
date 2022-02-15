import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {

    const navigate = useNavigate();

  return <div className="home">
{/* 
      <div className="addButton">
      <button onClick={()=>{navigate("/add")}}>Add Data</button>
      </div>


      <div className="previewButton">
      <button onClick={() =>{navigate("/preview")}}>Preview Data</button>
      </div>
 */}


  </div>;
};

export default Home;
