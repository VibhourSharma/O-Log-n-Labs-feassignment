"use client";

import Header from "@/components/Header";
import WeatherExtraInfo from "@/components/WeatherExtraInfo";
import WeatherInfo from "@/components/WeatherInfo";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="min-h-screen w-full bg-[url('/assets/background.jpg')] bg-cover bg-center bg-no-repeat">
        <Header />
        <WeatherInfo />
        <WeatherExtraInfo />
      </div>
    </Provider>
  );
}
