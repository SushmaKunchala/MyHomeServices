import React from 'react';
import './index.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Customer from "./Customer";
import Success from "./Success";
import Main from "./Main";
import Sample from "./Sample";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Sample/:cname" element={<Sample />}></Route>
        <Route path="/Filter/:name/:cost/:val" element={<Sample />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/customer/:cus_name/:cus_cost" element={<Customer />}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
