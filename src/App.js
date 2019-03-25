import React, {Component} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Featured from "./Featured/featured";
import Main from "./MAIN/Main";
import BackEnd from "../src/BackEnd/BackEnd"
import SecondPage from "./SecondPage/SecondPage"

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <main className="main">
          <Featured/>
          <section className="main_block">
            <ul className="main-list">
              <Main classBlock={BackEnd.classBlock} key={Math.random()}/>
            </ul>
          </section>
          <SecondPage/>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
