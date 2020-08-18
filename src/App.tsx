import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// from app
import Navigation from 'app/navigation';
import useCachedResources from 'app/hooks/useCachedResources';
import useColorScheme from 'app/hooks/useColorScheme';

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default App;
