import './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import Counter from "./components/Counter"
import Day22 from "./components/Day22.jsx"
import Day23 from "./components/Day23.jsx"
import Day24 from "./Day24/CoursePage.jsx"

// ✅ Import Routes and Route
import { Routes, Route } from "react-router-dom";

// ✅ Create placeholder components for Home, About, Contact
function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Day24" element={<Day24 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <div>
        
      </div>

      <Footer /> 
    </>
  )
}

export default App
