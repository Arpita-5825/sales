import logo from './logo.svg';
import './App.css';
import '../src/ProjectComponents/project.css';
import Dashboard from './ProjectComponents/Dashboard';
import MainDashboard from './ProjectComponents/MainDashboard';
import Products from './ProjectComponents/Products';
import Sales from './ProjectComponents/Sales';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Salesexpenses from './ProjectComponents/Salesexpenses';
import Login from './ProjectComponents/Login';




function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
           <Route path={"/"} element={<Login />} />
          <Route path={"/"} element={< Dashboard />}>
          <Route path={"/maindashboard"} index element={< MainDashboard />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/sales" }element={<Sales />} />
          <Route path={"/salesexpenses"} element={<Salesexpenses/>} />
       
          
        </Route>
        {/* <Route path={"/login"} element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
