import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerificationPage from './VerificationPage';
import VerifiedPage from "./pages/VerifiedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<VerificationPage/>}/>
        <Route path="/pages/VerifiedPage"element={<VerifiedPage/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
