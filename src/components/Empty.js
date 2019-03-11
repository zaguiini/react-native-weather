import React from 'react'
import { View } from 'react-native'
import Text from './Text'
import { gridStyles } from './grid'

function Empty({ text }) {
  return (
    <View style={gridStyles.mt1}>
      <Text
        style={{
          textAlign: 'center',
          paddingHorizontal: 16,
        }}
      >
        {text}
      </Text>
    </View>
  )
}

export default Empty
