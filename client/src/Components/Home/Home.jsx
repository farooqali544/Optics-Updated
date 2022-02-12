import { React } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
const Home = () => {

    const navigate = useNavigate();

  return <div className="home">
      <button onClick={()=>{navigate("/add")}}>Add A form</button>
      <button onClick={() =>{navigate("/preview")}}>Preview Data</button>
  </div>;
};

export default Home;
