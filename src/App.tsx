import '../gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Pages/Auth/Login';
import SignIn from './Pages/Auth/SignIn';

import FlashMessage  from 'react-native-flash-message';

const Drawer = createDrawerNavigator();

function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='LoginPage' component={Login}/>
        <Drawer.Screen name='SignInPage' component={SignIn}/>
      </Drawer.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default App;