# React Native simple weather app

<p align="center">
  <img src="https://raw.githubusercontent.com/zaguiini/react-native-weather/master/screenshots/initial.png" width="275" alt="Initial screen" />

  <img src="https://raw.githubusercontent.com/zaguiini/react-native-weather/master/screenshots/summary.png" width="275" alt="Weather summary" />

  <img src="https://raw.githubusercontent.com/zaguiini/react-native-weather/master/screenshots/details.png" width="275" alt="Weather details" />
</p>

## How to build

Open a terminal, then enter `yarn start`

### Android

Open another terminal tab, then `cd android && ./gradlew installDebug`

### iOS

Open `ios/weather.xcodeproj` on Xcode, then press `Run`

## Dependencies

- `axios`: better data fetching
- `date-fns`: functional date processing library (way better than `moment.js`)
- `immer`: immutable state producer, helper to produce pure state to components
- `react-native-elements`: ui kit
- `react-native-gridstrap`: bootstrap-like grid system, for better component disposition
- `react-native-text`: responsive text
- `react-native-vector-icons`: icons set
- `react-navigation`: mobile navigation for react native
- `react-navigation-hooks`: helpful react hooks for react navigation

## Possible improvements

- [`i18n`](<https://pt.wikipedia.org/wiki/Internacionaliza%C3%A7%C3%A3o_(inform%C3%A1tica)>)
- offline experience
- android `.apk` reduction
- show selected date on weather details page
- auto search on android (currently you got to press the `confirm` button to fire the weather fetching)

## License

MIT
