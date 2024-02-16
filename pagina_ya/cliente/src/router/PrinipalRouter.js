import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
  import Home from "../pages/home/Home"
  import SubirServicio from "../pages/SubirServicio/SubirServicio"
import Login from "../pages/login/Login";
  const RoutesPrincial =()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/subirservicio" element={<SubirServicio/>} />
                <Route path="/iniciosecion" element={<Login/>} />
            </Routes>
        </Router>
    )
  }

  export default RoutesPrincial 