import React from 'react';
//redux
import {Provider} from 'react-redux';
import store from '../store'
//routing
import {
  BrowserRouter as
  Router,
  Switch,
  Route
} from "react-router-dom";
//components
import NavMain from './navbar/navMain';
import Footer from './footer';
import MainPage from './homePage/mainPage';
import WeddingPortfolio from './productsPage/weddingPortfolio';
import Packages from './productsPage/packages';
import About from './productsPage/about';
import Contact from './productsPage/contact';

const Routing = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={NavMain} />
        <Switch>
        <Route path="/weddings/packages" component={Packages} />
        <Route path="/weddings" component={WeddingPortfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
          <Route path="/" component={MainPage} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    </Provider>
  );
}
export default Routing;
