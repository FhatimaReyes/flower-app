//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Routes, Route, Link } from "react-router-dom";
import React, {Component} from "react";

import AddFlower from "./components/add-flower.component";
import FlowerList from "./components/flower-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Catalogo de Flores
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Agregar
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <h2>React Firestore CRUD</h2>
          <Routes>
            <Route path="/" element={<FlowerList/>} />
            <Route path="add" element={<AddFlower/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
