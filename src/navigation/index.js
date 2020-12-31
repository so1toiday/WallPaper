import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Splash, ListPicktureHozizontal, DetailsPickture } from '@containers'

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ListHozi' component={ListPicktureHozizontal} />
        <Stack.Screen name='Details' component={DetailsPickture} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;