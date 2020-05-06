import { BasicWeather, Weather } from './Weather';

export interface City {
  id: Number;
  name: string;
  basicWeather: BasicWeather;
  extendedWeather?: Weather;
}
