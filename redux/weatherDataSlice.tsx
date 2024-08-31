import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: WeatherState = {
  data: null,
  status: null,
  error: null,
};

export const fetchWeatherData: any = createAsyncThunk(
  "weather/fetchWeatherData",
  async (localityID: string) => {
    const response = await fetch(
      `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${localityID}`,
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
    const data: APIResponse = await response.json();
    return data;
  }
);

const weatherDataSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch weather data";
      });
  },
});

export default weatherDataSlice.reducer;
