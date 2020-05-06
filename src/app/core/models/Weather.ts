export interface BasicWeather {
  temperature: Number;
  humidity: Number;
  description: string;
  shortDescription: string;
}

export interface Weather {
  pressure: Number;
  windSpeed: Number;
  clouds?: Number;
  windDegree: Number;
}

export interface Forecast extends Weather, BasicWeather {
  date: string | null
}
