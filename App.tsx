/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Auth0Provider } from 'react-native-auth0';
import config from './auth0-configuration';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'
import { Platform } from 'react-native';
import { HomeScreen, VideoScreen } from './src/components/Index';



const Stack = createNativeStackNavigator();
const App = () => {

    useEffect(() => {
        if (Platform.OS === 'android')
            SplashScreen.hide();
    }, []);

    return (

        <Auth0Provider domain={config.domain} clientId={config.clientId}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='HomeScreen'>
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="VideoScreen"
                        component={VideoScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </Auth0Provider>
    );
}

export default App;