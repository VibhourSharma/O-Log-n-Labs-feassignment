import Header from "@/components/Header";
import WeatherExtraInfo from "@/components/WeatherExtraInfo";
import WeatherInfo from "@/components/WeatherInfo";

export default function Home() {
  return (
    <div className="h-screen w-full bg-[url('/assets/background.jpg')] bg-cover bg-center bg-no-repeat">
      <Header />
      <WeatherInfo />
      <WeatherExtraInfo />
    </div>
  );
}
