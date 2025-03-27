import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Instructions } from "../pages/instructions/Instructions";
import Documents from "../pages/Documents";

export const AppRouter = () => {
  return (
    <Router>
      <Routes> 
      <Route path="/" element={<Documents />} />
      <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </Router>
  )
}