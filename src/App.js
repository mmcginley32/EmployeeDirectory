import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

//application layout
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </div>
  );
}

//export
export default App;