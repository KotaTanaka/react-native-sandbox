import React from 'react';
import { Ionicons } from '@expo/vector-icons';

interface ITabBarIconProps {
  name: string;
  color: string;
}

const TabBarIcon: React.FC<ITabBarIconProps> = (props) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
};

export default TabBarIcon;
