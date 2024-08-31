"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import localities from "./localities";
import { fetchWeatherData } from "@/redux/weatherDataSlice";

export default function Header() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Locality[]>([]);
  const [selectedLocalityID, setSelectedLocalityID] = useState<string | null>(
    null
  );
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const filteredSuggestions = localities.filter((locality) =>
        locality.localityName.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (localityID: string, localityName: string) => {
    setQuery(localityName);
    setSuggestions([]);
    setSelectedLocalityID(localityID);
  };

  const handleSearchButtonClick = () => {
    if (selectedLocalityID) {
      dispatch(fetchWeatherData(selectedLocalityID));
    }
  };

  return (
    <div className="flex items-center justify-around text-xl text-white backdrop-blur-lg bg-[#ffffff34] rounded-b-lg sm:p-2">
      <h1 className="p-4 font-bold sm:hidden">Weather 33</h1>

      <div className="relative z-50">
        <label htmlFor="Search" className="sr-only">
          Search
        </label>

        <input
          type="text"
          id="Search"
          value={query}
          onChange={handleInputChange}
          placeholder="Search city name..."
          className="w-full rounded-md py-2.5 text-sm px-4 pe-10 shadow-sm bg-[#ffffff11] backdrop-blur-lg outline-none transition-all duration-200 focus:outline-[#ffffff90]"
        />

        {suggestions.length > 0 && (
          <ul className="absolute z-50 w-full bg-gray-700 text-white text-base rounded-md shadow-lg max-h-60 overflow-auto">
            {suggestions.map((locality) => (
              <li
                key={locality.localityID}
                onClick={() =>
                  handleSuggestionClick(
                    locality.localityID,
                    locality.localityName
                  )
                }
                className="p-2 cursor-pointer hover:bg-gray-800 z-50"
              >
                {locality.localityName}
              </li>
            ))}
          </ul>
        )}

        <span
          onClick={handleSearchButtonClick}
          className="absolute inset-y-0 end-0 grid w-10 place-content-center cursor-pointer"
        >
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
