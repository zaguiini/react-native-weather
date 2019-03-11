import React from 'react'
import { FlatList, View } from 'react-native'

import WeatherContext from '../lib/WeatherContext'
import colors from '../lib/constants/colors'
import { SET_IS_LOADING } from '../lib/app-reducer'
import Empty from './Empty'

function WeatherList({ renderItem, resolveData, keyExtractor }) {
  const { value, dispatch } = React.useContext(WeatherContext)

  const handleRefresh = React.useCallback(
    () =>
      dispatch({
        type: SET_IS_LOADING,
        payload: true,
      }),
    []
  )

  return (
    <FlatList
      refreshing={value.isLoading}
      onRefresh={handleRefresh}
      data={resolveData(value.results.data)}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 5,
            backgroundColor: colors.grey,
          }}
        />
      )}
      ListEmptyComponent={() =>
        !value.isLoading && <Empty text="Sem resultados. Tente novamente!" />
      }
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  )
}

export default WeatherList
