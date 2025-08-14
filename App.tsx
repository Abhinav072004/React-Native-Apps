import { ScrollView } from 'react-native/types_generated/index'
import { View, Text} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './Components/FlatCards'
import FancyCards from './Components/FancyCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      
      <FlatCards />
      <FancyCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
