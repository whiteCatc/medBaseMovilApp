import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateUserScreens from './screens/CreateUserScreen'
import UserDetailScreen from './screens/UserDetailsScreen'
import UserList from './screens/UsersList'
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='CreateUserScreens' component={CreateUserScreens} />
      <Stack.Screen name='UserDetailsScreen' component={UserDetailScreen} />
      <Stack.Screen name='UserList' component={UserList} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
