import React from 'react'

export const initialContextValue = {
  weatherQuery: '',
  isLoading: false,
  results: {
    city: null,
    data: [],
  },
}

export default React.createContext(initialContextValue)
