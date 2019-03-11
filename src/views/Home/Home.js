import React from 'react'
import { Container } from '../../components/grid'

import WeatherQueryInput from './components/WeatherQueryInput'
import WeatherSummary from './components/WeatherSummary'
import colors from '../../lib/constants/colors'

function Home() {
  return (
    <Container fluid style={{ backgroundColor: colors.grey }}>
      <WeatherQueryInput />
      <WeatherSummary />
    </Container>
  )
}

Home.navigationOptions = {
  title: 'Clima',
  headerBackTitle: null,
}

export default Home
