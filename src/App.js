import React from "react";
import "./App.css";
import Snowflake from "./components/Snowflakes";
import Footer from "./pages/footer/footer";

class App extends React.Component {
  snow = () => {
    let animationDelay = "0s";
    let fontSize = "100px";
    let arr = Array.from(
      "Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!"
    );
    return arr.map((el, i) => {
      animationDelay = `${(Math.random() * 16).toFixed(2)}s`;
      fontSize = `${Math.floor(Math.random() * 10) + 10}px`;
      let style = {
        animationDelay,
        fontSize,
      };
      return <Snowflake key={i} id={i} style={style} />;
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="image-container">
            <img src="/gif/header.gif" alt="Example image" />
          </div>
          <div className="title-header">
            <h1 className="text-4xl font-bold text-from-header">Love South Park</h1>
          </div>
        </header>
        
        <div className="body">
        <div className="body-ceu" ></div>
        <div className="body-image">
        {this.snow()}
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
