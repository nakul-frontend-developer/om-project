import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import CommonRoute from './Routing/CommonRoute';
 

function App() {
  return (
    <div className="App">
        <Header></Header>
        {CommonRoute}
        <Footer></Footer>
    </div>
  );
}

export default App;
