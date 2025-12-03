/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GoogleGenAI } from "@google/genai";
import { useEffect } from 'react';
import EventSearchApp from '../../EventSearchApp';


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const apiKey = "AIzaSyDEg3E9upW1wAYzNDSKblaMuXoA4WZp6AI";
  const ai = new GoogleGenAI({ apiKey });

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <EventSearchApp />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
