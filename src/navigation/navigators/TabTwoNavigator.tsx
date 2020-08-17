import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// from app
import TabTwoScreen from 'app/screens/TabTwoScreen';
import { TTabTwoParamList } from 'app/types/navigation';

const TabTwoStack = createStackNavigator<TTabTwoParamList>();

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

export default TabTwoNavigator;
