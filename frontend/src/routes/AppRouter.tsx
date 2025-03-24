import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Instructions } from "../pages/instructions/Instructions";

export const AppRouter = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Instructions />} />
      </Routes>
    </Router>
  )
}