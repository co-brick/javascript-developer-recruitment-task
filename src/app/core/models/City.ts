import { BasicWeather } from './BasicWeather';

export interface City {
  id: Number,
  name: string,
  basicWeather: BasicWeather
}