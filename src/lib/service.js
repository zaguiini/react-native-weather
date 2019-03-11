import axios from 'axios'
import formatDate from './format-date'

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast'
const API_KEY = 'd34836055f7471e8e0311939edcee965'

class WeatherService {
  processItem(item) {
    return {
      date: item.dt * 1000,
      type: item.weather[0].id,
      temperature: item.main.temp,
    }
  }

  getForecast(location) {
    return new Promise(async (resolve, reject) => {
      const encodedLocation = encodeURIComponent(location)
      const url = `${BASE_URL}?q=${encodedLocation}&appid=${API_KEY}&lang=pt&units=metric`
      let data

      console.log(url)

      try {
        const request = await axios.get(url)
        data = request.data
      } catch (e) {
        if (e.response && e.response.status === 404) {
          return resolve({
            city: null,
            data: [],
          })
        }

        console.log(JSON.stringify(e))
        return reject(e)
      }

      console.log(data)

      const results = {
        city: `${data.city.name}, ${data.city.country}`,
        data: [],
      }

      for (let item of data.list) {
        const rawDate = new Date(item.dt * 1000)
        const [date] = rawDate.toISOString().split('T')
        const i = results.data.length - 1

        let isSameDay = false

        if (results.data[i]) {
          isSameDay =
            results.data[i].date === date ||
            formatDate(rawDate, 'p') === '21:00'
        }

        if (results.data[i] && isSameDay) {
          results.data[i].items.push(this.processItem(item))
        } else {
          results.data.push({
            date,
            type: item.weather[0].id,
            temperature: item.main.temp,
            items: [this.processItem(item)],
          })
        }
      }

      resolve(results)
    })
  }
}

export default new WeatherService()
