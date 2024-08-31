"use client";
import { useSelector } from "react-redux";

const weatherDetails = [
  { label: "Humidity", key: "humidity" },
  { label: "Wind Speed", key: "wind_speed" },
  { label: "Wind Direction", key: "wind_direction" },
];

export default function WeatherExtraInfo() {
  const data = useSelector(
    (state: any) => state.weather.data?.locality_weather_data
  );

  return (
    <div className="flex items-center justify-center p-4 flex-col m-4">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl text-white font-bold">Weather Details</p>
      </div>

      <div className="flex items-center justify-around text-xl text-white backdrop-blur-sm bg-[#ffffff34] rounded-b-lg w-[45rem] m-4 rounded-lg">
        {weatherDetails.map((detail) => (
          <div
            key={detail.key}
            className="p-2 text-white flex flex-col items-center justify-center gap-4"
          >
            <div className="backdrop-blur-xl bg-[#cdcdcd33] p-2 rounded-lg w-44">
              <p className="font-medium text-lg p-1">{detail.label}</p>
              <p className="p-1 font-semibold text-base">
                {data &&
                data[detail.key] !== undefined &&
                data[detail.key] !== null
                  ? data[detail.key]
                  : "_"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
