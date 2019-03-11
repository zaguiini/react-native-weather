import { produce } from 'immer'

export const SET_WEATHER_QUERY = 'SET_WEATHER_QUERY'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_RESULTS = 'SET_RESULTS'

function appReducer(state, { type, payload }) {
  return produce(state, draft => {
    switch (type) {
      case SET_WEATHER_QUERY:
        draft.weatherQuery = payload
        break

      case SET_IS_LOADING:
        draft.isLoading = payload
        break

      case SET_RESULTS:
        draft.results = payload
        draft.isLoading = false
        break
    }
  })
}

export default appReducer
