import React from 'react'
import { useNavigation } from 'react-navigation-hooks'
import WeatherList from '../../components/WeatherList'
import WeatherItem from '../../components/WeatherItem'
import formatDate from '../../lib/format-date'

function Details() {
  const navigation = useNavigation()

  return (
    <WeatherList
      resolveData={data => data[navigation.getParam('index')].items}
      keyExtractor={({ date }) => date.toString()}
      renderItem={({ item }) => (
        <WeatherItem
          type={item.type}
          date={formatDate(new Date(item.date), 'p')}
          showDetailsIcon
          temperature={parseInt(item.temperature, 10)}
          showDetailsIcon={false}
        />
      )}
    />
  )
}

Details.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('city'),
})

export default Details
