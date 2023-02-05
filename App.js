import 'react-native-gesture-handler';
import {React, useContext} from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SignInWelcomeScreen from "./src/screens/auth/SignInWelcomeScreen";
import SignInScreen from './src/screens/auth/SignInScreen';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import RestaurantsMapScreen from "./src/screens/RestaurantsMapScreen";
import { colors } from './src/global/style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/screens/auth/SignUpScreen';
import { SignInContext, SignInContextProvider } from './src/contexts/authContext';

const Stack = createNativeStackNavigator()

export default function App() {
  const {signedIn,} = useContext(SignInContext)
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusBar}
        />
        <NavigationContainer>
          {
            signedIn.userToken === null ? (
              <Stack.Navigator
                initialRouteName="SignInWelcomeScreen"
              >
                <Stack.Screen name="SignInWelcomeScreen" component={SignInWelcomeScreen} options={{headerShown: false}} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}} />
              </Stack.Navigator>
            ) : (
                <Stack.Navigator>
                  <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{headerShown: false}} />
                  <Stack.Screen name="RestaurantsMapScreen" component={RestaurantsMapScreen} options={{headerShown: false}} />
                </Stack.Navigator>
            )
          }
          
        </NavigationContainer>
      </View>
    </SignInContextProvider>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})