import './sass/app.sass';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={
          <>
            <Navbar/>
            <Home/>
            <Footer/>
          </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
