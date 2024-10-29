import React, { useEffect } from 'react';
import { View, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from "expo-router"; // Jeśli korzystasz z expo-router

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      // Ukrycie paska nawigacyjnego
      NavigationBar.setVisibilityAsync("hidden");
      NavigationBar.setBehaviorAsync("inset-swipe");
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" hidden /> {/* Ukrycie paska statusu */}
      <Slot /> {/* Wyświetlenie głównego widoku w expo-router */}
    </View>
  );
}
