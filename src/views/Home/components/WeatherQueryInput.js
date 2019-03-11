import React from 'react'
import { Platform } from 'react-native'
import SearchBar from 'react-native-elements/src/searchbar/SearchBar'
import { gridStyles } from '../../../components/grid'
import useDebounce from '../../../lib/use-debounce'
import WeatherContext from '../../../lib/WeatherContext'
import { SET_WEATHER_QUERY, SET_IS_LOADING } from '../../../lib/app-reducer'

function WeatherQueryInput() {
  const firstRun = React.useRef(true)
  const { value, dispatch } = React.useContext(WeatherContext)

  const [weatherQuery, setWeatherQuery] = React.useState(value.weatherQuery)
  const debouncedWeatherQuery = useDebounce(weatherQuery, 1500)

  React.useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false
      return
    }

    dispatch({
      type: SET_WEATHER_QUERY,
      payload: debouncedWeatherQuery,
    })

    dispatch({
      type: SET_IS_LOADING,
      payload: true,
    })
  }, [debouncedWeatherQuery])

  return (
    <SearchBar
      lightTheme
      platform={Platform.OS}
      placeholder="Insira a localização"
      containerStyle={gridStyles.ph025}
      onChangeText={setWeatherQuery}
      value={weatherQuery}
    />
  )
}

export default WeatherQueryInput
