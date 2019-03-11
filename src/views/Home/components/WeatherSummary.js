import React from 'react'
import { useNavigation } from 'react-navigation-hooks'
import { Row, Col } from '../../../components/grid'
import WeatherContext from '../../../lib/WeatherContext'
import WeatherList from '../../../components/WeatherList'
import WeatherItem from '../../../components/WeatherItem'
import Empty from '../../../components/Empty'
import formatDate from '../../../lib/format-date'
import { TouchableOpacity } from 'react-native-gesture-handler'

function WeatherSummary() {
  const { value } = React.useContext(WeatherContext)
  const { navigate } = useNavigation()

  return (
    <Row style={{ height: '100%' }}>
      <Col>
        {value.weatherQuery ? (
          <WeatherList
            resolveData={data => data}
            keyExtractor={({ date }) => date}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() =>
                  navigate('Details', {
                    city: value.results.city,
                    index,
                  })
                }
              >
                <WeatherItem
                  type={item.type}
                  date={formatDate(
                    new Date(item.date + 'T15:00:00'),
                    'P'
                  ).substr(0, 5)}
                  showDetailsIcon
                  temperature={parseInt(item.temperature, 10)}
                />
              </TouchableOpacity>
            )}
          />
        ) : (
          <Empty text="Digite uma localização acima" />
        )}
      </Col>
    </Row>
  )
}

export default WeatherSummary
