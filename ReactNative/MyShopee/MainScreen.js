import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from './HomeScreen';
import { UserScreen } from './UserScreen';

const Tab = createBottomTabNavigator();

export function MainScreen({navigation}) {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
          options={{headerShown:false,
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),}} />
          <Tab.Screen name="User" component={UserScreen}
          options={{headerShown:false,
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),}} />
        </Tab.Navigator>
      );
}