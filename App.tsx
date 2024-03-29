import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import store, { persistor } from '@redux/store';
import AppNavigator from '@app/navigation/MainNavigator';
import { SetupApi } from '@config/appSetup';

import './src/config';

const App = () => {
  useEffect(() => {
    SetupApi();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <SafeAreaProvider>
            <StatusBar translucent barStyle="light-content" />
            <AppNavigator />
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
