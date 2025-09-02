import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerificationPage from './VerificationPage';
import VerifiedPage from "./pages/VerifiedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"element={<VerificationPage/>}/>
        <Route path="/verifiedpage"element={<VerifiedPage/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
