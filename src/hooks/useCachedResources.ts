import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const useCachedResources = (): boolean => {
  const [isLoadingComplete, setLoadingComplete] = useState<boolean>(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async (): Promise<void> => {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('app/assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        await SplashScreen.hideAsync();
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
