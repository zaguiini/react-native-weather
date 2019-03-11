import React from 'react'
import { StyleSheet } from 'react-native'
import BaseText from 'react-native-text'

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
  },
  h2: {
    fontSize: 34,
  },
  h3: {
    fontSize: 28,
  },
  h4: {
    fontSize: 22,
  },
  body: {
    fontSize: 16,
  },
})

function Text({ style, variant = 'body', color = 'black', ...props }) {
  return (
    <BaseText
      style={[
        styles[variant],
        {
          color,
        },
        style,
      ]}
      {...props}
    />
  )
}

export default Text
