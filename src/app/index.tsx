import React from 'react'
import { View } from 'react-native'

import RiveForWebStatic from '../components/RiveForWebStatic'

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3b4252'
      }}>
      <RiveForWebStatic />
    </View>
  )
}
