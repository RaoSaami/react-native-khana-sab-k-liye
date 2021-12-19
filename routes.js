import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUp from './screens/signup';
import Login from './screens/login';
import Needy1 from './screens/home.js/needy1';


const Tab = createBottomTabNavigator();

function Routes() {
  return (
      <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Home" component={Needy1} />

    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Routes;