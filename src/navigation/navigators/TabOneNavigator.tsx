import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// from app
import TabOneScreen from 'app/screens/TabOneScreen';
import { TTabOneParamList } from 'app/types/navigation';

const TabOneStack = createStackNavigator<TTabOneParamList>();

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
