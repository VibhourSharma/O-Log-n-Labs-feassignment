declare type Locality = {
  localityID: string;
  localityName: string;
};

declare type WeatherState = {
  data: APIResponse | null;
  status: string | null;
  error: string | null;
};

declare type LocalityWeatherData = {
  temperature: number;
  humidity: number;
  wind_speed: number;
  wind_direction: number;
  rain_intensity: number;
  rain_accumulation: number;
};

declare type APIResponse = {
  status: number;
  message: string;
  device_type: number;
  locality_weather_data: LocalityWeatherData;
};
