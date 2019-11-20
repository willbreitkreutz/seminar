import { createRouteBundle } from 'redux-bundler';
import Home from '../app_components/Home';

export default createRouteBundle({
  "/": Home,
  "*": Home
})