import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import DiscoveryScreen from './src/screens/DiscoveryScreen';
import MatchScreen from './src/screens/MatchScreen';
import ChatScreen from './src/screens/ChatScreen';

export default function App() {
  // In a real app, we'd use React Navigation. 
  // For this showcase, we default to the Discovery view.
  const [currentScreen, setCurrentScreen] = useState('Discovery');

  return (
    <View style={{ flex: 1, backgroundColor: '#0D0D0D' }}>
      <StatusBar barStyle="light-content" />
      {currentScreen === 'Discovery' && <DiscoveryScreen />}
      {currentScreen === 'Match' && <MatchScreen />}
      {currentScreen === 'Chat' && <ChatScreen />}
    </View>
  );
}
