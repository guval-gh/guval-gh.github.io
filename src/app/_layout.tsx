import { SafeAreaView } from 'react-native'

import { Stack } from 'expo-router'

import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'black' } }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </SafeAreaView>
  )
}
