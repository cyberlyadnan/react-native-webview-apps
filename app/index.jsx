import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View, ViewBase } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView 
      
        source={{ uri: 'https://my-portfolio-7c5de.web.app/' }} 
        // source={{ uri: 'https://foodieexpress-abfbe.web.app/' }} 
        // source={{ uri: 'https://docs-429cd.web.app/' }} 
        // source={{ uri: 'https://geminiflix.pages.dev/' }} 
        // source={{ uri: 'https://grocerystore-9fa87.web.app/' }} 
        // source={{ uri: 'https://my-65a3e.web.app/' }} 
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
