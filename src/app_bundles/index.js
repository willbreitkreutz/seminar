import { composeBundles } from 'redux-bundler';
import routeBundle from './route-bundle';
import bagBundle from './bag-bundle';

export default composeBundles(
  routeBundle,
  bagBundle
);