import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { connect } from 'redux-bundler-react';
import { getNavHelper } from 'internal-nav-helper';

const App = ({ route: Route, doUpdateUrl }) => {
  return (
    <div 
      className="container"
      onClick={ getNavHelper(doUpdateUrl) }
    >
      <Header />

      <Route />
      
      <hr />
      <Footer />
    </div>
  );
}

export default connect(
  'selectRoute',
  'doUpdateUrl',
  App
);
