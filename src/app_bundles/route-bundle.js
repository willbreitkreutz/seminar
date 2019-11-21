import { createRouteBundle } from 'redux-bundler';
import Home from '../app_components/Home';
import Details from '../app_components/Details';

export default createRouteBundle({
  "/": Home,
  "/:category": Details,
  "*": Home
})