import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';


import { createStore } from 'redux';
import { persistStore } from 'redux-persist';

import { PersistGate } from 'redux-persist/integration/react';

import rootReducer from './src/modules';
// import store from './src/redux/store';
const store = createStore(rootReducer);
export const persistedStore = persistStore(store);


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistedStore}>
            <Navigation colorScheme={colorScheme} />
          <StatusBar />
          </PersistGate>
        </Provider >
      </SafeAreaProvider>
    );
  }
}

