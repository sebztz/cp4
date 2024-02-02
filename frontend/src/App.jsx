import { Outlet } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* Parallax Star Background HTML */}
      <div id="stars"> </div>
      <div id="stars2"> </div>
      <div id="stars3"> </div>

      {/* End Parallax Star Background HTML */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
