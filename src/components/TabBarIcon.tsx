import React from 'react';
import { Ionicons } from '@expo/vector-icons';

type TabBarIconProps = {
  name: string;
  color: string;
};

const TabBarIcon: React.FC<TabBarIconProps> = (props) => {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
};

export default TabBarIcon;
