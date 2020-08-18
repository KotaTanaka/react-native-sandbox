import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// from app
import Colors from 'app/constants/Colors';
import TabOneNavigator from 'app/navigation/navigators/TabOneNavigator';
import TabTwoNavigator from 'app/navigation/navigators/TabOneNavigator';
import useColorScheme from 'app/hooks/useColorScheme';
import TabBarIcon from 'app/components/TabBarIcon';
import { BottomTabParamList } from 'app/types/navigation';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

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
