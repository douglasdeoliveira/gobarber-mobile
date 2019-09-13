import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

// import { createBottomTabNavigator } from 'react-navigation-tabs';

export default createAppContainer(
  createSwitchNavigator({
    SignIn,
    SignUp,
  }),
);
