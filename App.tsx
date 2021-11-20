import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import DemoContext from './components/DemoContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [showEmpty, setShowEmpty] = React.useState(true);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ActionSheetProvider>
        <DemoContext.Provider
          value={{
            emptyState: showEmpty,
            setEmptyState: setShowEmpty
          }}
        >
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </DemoContext.Provider>
      </ActionSheetProvider>
    );
  }
}
