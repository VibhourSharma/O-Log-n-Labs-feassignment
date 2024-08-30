"use client";

import { useEffect } from "react";

export default function Header() {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=ZWL001156",
        {
          headers: {
            "X-Zomato-Api-Key":
              process.env.NEXT_PUBLIC_ZOMATO_WEATHER_API_KEY || "",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center text-xl text-white backdrop-blur-lg bg-[#ffffff34] rounded-b-lg">
      <h1 className="p-4 font-bold">Weather 24/7</h1>

      <div className="relative">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <input
          type="text"
          id="Search"
          placeholder="Search anything..."
          className="w-full rounded-md py-2.5 px-4 pe-10 shadow-sm sm:text-sm bg-[#ffffff11] backdrop-blur-lg outline-none transition-all duration-200 focus:outline-[#ffffff90]"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-200 hover:text-gray-300">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}
