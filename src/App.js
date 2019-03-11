import React from 'react'
import { Alert } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import appReducer, { SET_RESULTS, SET_IS_LOADING } from './lib/app-reducer'
import weatherService from './lib/service'
import WeatherContext, { initialContextValue } from './lib/WeatherContext'
import Home from './views/Home/Home'
import Details from './views/Details/Details'

const AppNavigator = createAppContainer(
  createStackNavigator({
    Home,
    Details,
  })
)

function App() {
  const [value, dispatch] = React.useReducer(appReducer, initialContextValue)

  React.useEffect(() => {
    async function run() {
      if (!value.isLoading) {
        return
      }

      if (value.weatherQuery) {
        try {
          const data = await weatherService.getForecast(value.weatherQuery)

          if (data) {
            dispatch({
              type: SET_RESULTS,
              payload: data,
            })
          }
        } catch (e) {
          Alert.alert('Erro ao buscar dados!')

          dispatch({
            type: SET_IS_LOADING,
            payload: false,
          })
        }
      } else {
        dispatch({
          type: SET_RESULTS,
          payload: {
            city: null,
            data: [],
          },
        })

        dispatch({
          type: SET_IS_LOADING,
          payload: false,
        })
      }
    }

    run()
  }, [value.isLoading, value.weatherQuery])

  return (
    <WeatherContext.Provider value={{ value, dispatch }}>
      <AppNavigator />
    </WeatherContext.Provider>
  )
}

export default App
