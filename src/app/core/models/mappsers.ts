import { City } from './City';
import { CityWeatherDetailsResponse, ApiForecast } from './api';
import { Forecast } from './Weather';

export function convertStoredObjectToCity(apiResponseObject: Object): City {
  const main = apiResponseObject['main'];
  const weather = apiResponseObject['weather'][0];
  return {
    id: apiResponseObject['id'] as Number,
    name: apiResponseObject['name'] as string,
    basicWeather: {
      temperature: main['temp'] as Number,
      humidity: main['humidity'] as Number,
      shortDescription: weather['main'] as string,
      description: weather['description'] as string,
    },
  };
}

export function convertCityWeatherResponseToDetails(
  cityWeatherDetailsResponse: CityWeatherDetailsResponse
): City {
  const weather = cityWeatherDetailsResponse.weather[0];
  return {
    id: cityWeatherDetailsResponse.id,
    name: cityWeatherDetailsResponse.name,
    basicWeather: {
      temperature: cityWeatherDetailsResponse.main.temp,
      humidity: cityWeatherDetailsResponse.main.humidity,
      description: weather.description,
      shortDescription: weather.main,
    },
    extendedWeather: {
      pressure: cityWeatherDetailsResponse.main.pressure,
      windSpeed: cityWeatherDetailsResponse.wind.speed,
      clouds: cityWeatherDetailsResponse.clouds.alt,
      windDegree: cityWeatherDetailsResponse.wind.deg,
    },
  };
}

export function convertApiForecastResponseToForecast(
  apiForecast: ApiForecast
): Forecast {
  return {
    date: apiForecast.dt_txt,
    temperature: apiForecast.main.temp,
    humidity: apiForecast.main.humidity,
    description: apiForecast.weather[0].description,
    shortDescription: apiForecast.weather[0].main,
    pressure: apiForecast.main.pressure,
    windSpeed: apiForecast.wind.speed,
    clouds: apiForecast.clouds.alt,
    windDegree: apiForecast.wind.deg
  };
}
