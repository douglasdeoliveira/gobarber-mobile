import React from 'react';
import { YellowBox } from 'react-native';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  YellowBox.ignoreWarnings(['Warning: componentWillMount is deprecated']);
  const signed = useSelector(state => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}
