import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { connect } from 'redux-bundler-react';

const App = ({ route: Route }) => {
  return (
    <div>
      <Header />

      <Route />
      
      <hr />
      <Footer />
    </div>
  );
}

export default connect(
  'selectRoute',
  App
);
