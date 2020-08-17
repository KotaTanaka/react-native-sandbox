import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// from app
import Colors from 'app/constants/Colors';
import useColorScheme from 'app/hooks/useColorScheme';
import TabOneScreen from 'app/screens/TabOneScreen';
import TabTwoScreen from 'app/screens/TabTwoScreen';
import {
  IBottomTabParamList,
  ITabOneParamList,
  ITabTwoParamList,
} from 'app/interfaces/app';

const BottomTab = createBottomTabNavigator<IBottomTabParamList>();
const TabOneStack = createStackNavigator<ITabOneParamList>();
const TabTwoStack = createStackNavigator<ITabTwoParamList>();

interface ITabBarIconProps {
  name: string;
  color: string;
}

const TabBarIcon: React.FC<ITabBarIconProps> = (props) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
};

const TabOneNavigator: React.FC = () => {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
};

const TabTwoNavigator: React.FC = () => {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
};

const BottomTabNavigator: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
