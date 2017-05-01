import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <section className="main">
        <Header />
        <div className="container">
            {this.props.children}
        </div>
        <Footer />
      </section>
    );
  }
}

export default App;
