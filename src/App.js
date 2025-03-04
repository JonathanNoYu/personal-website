import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Home from "./website/home";
import NavBar from "./NavBar";
import "./styles/gen-styles.css"

function App() {
   return (
      <HashRouter>
         <NavBar />
         <div className="wd-nav-padding">
            <Routes>
               <Route path="/*" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/about" element={<div>About</div>} />
               <Route path="/blogs" element={<div>Blogs</div>} />
               <Route path="/contact" element={<div>Contact</div>} />
            </Routes>
         </div>
      </HashRouter>
   );
}
export default App;
