import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes } from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import Sidebar from "./components/template/Sidebar";
import Header from "./components/template/Header";
import Footer from "./components/template/Footer";

function App() {
  return (
    <div className="sidebar-menu-collapsed">
      <Router>
        <Sidebar />
        <Routes />
      </Router>
        <Header />
      <Footer />
    </div>
  );
}

export default App;
