  import './App.css'
  import Header from "./components/Header/Header"
  import Footer from "./components/Footer/Footer"
  import Main from "./components/Main/Main"
  import Counter from "./components/Counter"
  import Day22 from "./components/Day22.jsx"
  import Day23 from "./components/Day23.jsx"
  import CoursePage from "./Day25/CoursePage.jsx"
  import Navs from "./Day25/Navs.jsx"


  // ✅ Import Routes and Route
  import { Routes, Route } from "react-router-dom";

  // ✅ Create placeholder components for Home, About, Contact

  
  function App() {
    return (
      <>
      <Navs />
      <Routes>
        <Route path="/courses" element={<CoursePage />} />
      </Routes>

          
  
      </>
    )
  }

  export default App
