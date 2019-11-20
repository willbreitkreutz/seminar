import React from 'react';

import Header from "./Header";
import Footer from "./Footer";
import CounterTotal from "./CounterTotal"

const App = () => {

  return (
    <div className="App">
      <Header />
      <hr />
      <CounterTotal />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
