export default function WeatherInfo() {
  return (
    <div className="flex items-center justify-center p-4 flex-col">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl text-white font-bold">
          Never Get Caught In The Rain Again
        </p>
        <p className="text-white p-2 font-bold">
          Stay Ahead of the Weather with our forecast!
        </p>
      </div>

      {/* temprature weather information */}

      <div className="flex items-center justify-around text-xl text-white backdrop-blur-sm bg-[#ffffff34] rounded-b-lg w-[45rem] m-4 rounded-lg">
        {/* first part */}
        <div className="p-3 w-48 rounded-lg text-white backdrop-blur-xl bg-[#cdcdcd33]">
          <p className="font-medium text-lg p-1">Temperature</p>
          <p className="p-2 font-semibold text-3xl">28°C</p>
        </div>
        {/* second part */}
        <div className="p-2 text-white flex flex-col items-center justify-center gap-4">
          <div className="backdrop-blur-xl bg-[#cdcdcd33] rounded-lg p-3 w-56">
            <p className="font-medium text-lg p-1">Rain Accumulation</p>
            <p className="p-1 font-semibold">0.46473783</p>
          </div>
          <div className="backdrop-blur-xl bg-[#cdcdcd33] rounded-lg p-3 w-56 text-lg">
            <p>Rain Intensity</p>
            <p className="p-1 font-semibold">0.456273</p>
          </div>
        </div>
      </div>
    </div>
  );
}
