import React from 'react'
import { View, StyleSheet } from 'react-native'
import { gridStyles } from './grid'
import Icon from 'react-native-vector-icons/Feather'
import Text from './Text'
import colors from '../lib/constants/colors'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    ...gridStyles.pv1,
    ...gridStyles.ph1,
  },
})

function getColors(type) {
  let backgroundColor, icon

  if (type === 800) {
    backgroundColor = colors.clearSkyBlue
    icon = 'sun'
  } else if (type >= 801 && type <= 803) {
    backgroundColor = colors.cloudySkyGrey
    icon = 'cloud'
  } else {
    backgroundColor = colors.rainySkyBlack
    icon = 'cloud-rain'
  }

  return {
    backgroundColor,
    icon,
  }
}

function WeatherItem({
  date,
  type,
  temperature,
  style,
  showDetailsIcon = false,
}) {
  const { backgroundColor, icon } = getColors(type)

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
        },
        style,
      ]}
    >
      <Text variant="h3" color={colors.white}>
        {date}
      </Text>
      <Text variant="h3" color={colors.white} style={gridStyles.ml2}>
        {temperature} º C
      </Text>
      <Icon
        name={icon}
        color={colors.white}
        style={{ marginLeft: 'auto' }}
        size={30}
      />
      {showDetailsIcon && (
        <Icon
          name="chevron-right"
          color={colors.white}
          size={20}
          style={gridStyles.ml1}
        />
      )}
    </View>
  )
}

export default WeatherItem
