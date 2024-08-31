"use client";
import { useSelector } from "react-redux";

const weatherDetails = [
  { label: "Temperature", key: "temperature" },
  { label: "Rain Accumulation", key: "rain_accumulation" },
  { label: "Rain Intensity🌦️", key: "rain_intensity" },
];

export default function WeatherInfo() {
  const { data } = useSelector((state: any) => state.weather);

  const weatherData = data?.locality_weather_data || {};

  return (
    <div className="flex items-center justify-center p-4 flex-col m-4 flex-wrap">
      <div className="flex flex-col items-center justify-center flex-wrap">
        <p className="text-3xl text-white font-bold sm:text-xl">
          Never Get Caught In The Rain Again
        </p>
        <p className="text-white p-2 font-bold sm:text-sm">
          Stay Ahead of the Weather with our forecast!
        </p>
      </div>

      <div className="flex items-center justify-around text-xl text-white bg-[#ffffff27] rounded-b-lg w-[45rem] m-4 rounded-lg flex-wrap sm:w-[95%] sm:p-4">
        {/* Temperature */}
        <div className="p-3 w-48 rounded-lg text-white backdrop-blur-xl bg-[#cdcdcd33] sm:w-56 sm:text-lg sm:p-2">
          <p className="font-medium text-lg p-1">Temperature 🌡️</p>
          <p className="p-2 font-semibold text-3xl">
            {weatherData.temperature !== null &&
            weatherData.temperature !== undefined
              ? `${weatherData.temperature}° C`
              : "_"}
          </p>
        </div>

        {/* Rain Accumulation and Rain Intensity */}
        <div className="p-2 text-white flex flex-col items-center justify-center gap-4">
          {weatherDetails.slice(1).map((detail) => (
            <div
              key={detail.key}
              className="bg-[#cdcdcd53] rounded-lg p-3 w-56"
            >
              <p className="font-medium text-lg p-1">{detail.label}</p>
              <p className="p-1 font-semibold">
                {weatherData[detail.key] !== null &&
                weatherData[detail.key] !== undefined
                  ? weatherData[detail.key]
                  : "_"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
