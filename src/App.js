import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { colors } from './data/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Login from './Screens/Main';

const Stack = createStackNavigator({
  screens: {
    LoginScreen : Login,
    HomeScreen: Home,
  },
});



const App = () => {
  return (
    <View style={{flex:1,backgroundColor:colors.background}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen name='LoginScreen' component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App