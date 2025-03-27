import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthRedirect, Builder, Login } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Builder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/callback" element={<AuthRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
