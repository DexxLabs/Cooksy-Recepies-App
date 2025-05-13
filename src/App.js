import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { colors } from './data/colors'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Login from './Screens/Main';
import 'react-native-gesture-handler';
import RecepieScreen from './Screens/RecepieScreen';

const Stack = createStackNavigator({
  screens: {
    LoginScreen : Login,
    HomeScreen: Home,
    Recepie : RecepieScreen
  },
});



const App = () => {
  return (
    <View style={{flex:1,backgroundColor:colors.background}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen name='LoginScreen' component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
          <Stack.Screen name='Recepie' component={RecepieScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App