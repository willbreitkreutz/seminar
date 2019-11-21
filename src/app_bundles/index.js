import { composeBundles } from 'redux-bundler';
import routeBundle from './route-bundle';
import bagBundle from './bag-bundle';
import createBagBundle from './create-bag-bundle';

export default composeBundles(
  routeBundle,
  bagBundle,
  createBagBundle({
    name: 'personal',
    weight: 10
  }),
  createBagBundle({
    name: 'carryon',
    weight: 30
  }),
  createBagBundle({
    name: 'checked',
    weight: 55
  })
);