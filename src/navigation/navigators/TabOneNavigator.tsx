import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// from app
import TabOneScreen from 'app/screens/TabOneScreen';
import { TabOneParamList } from 'app/types/navigation';

const TabOneStack = createStackNavigator<TabOneParamList>();

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

export default TabOneNavigator;
