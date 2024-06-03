import ThemeProvider from '@/context/ThemeContext';
import { RootNavigation } from '@/navigation';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Arvo-Bold': require('./assets/fonts/Arvo/Arvo-Bold.ttf'),
    'Arvo-Regular': require('./assets/fonts/Arvo/Arvo-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <View onLayout={onLayoutRootView} style={{flex:1}}>
      <ThemeProvider>
        <RootNavigation />
      </ThemeProvider>
    </View>
  );
}
