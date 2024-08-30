export default function WeatherExtraInfo() {
  return (
    <div className="flex items-center justify-center p-4 flex-col">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl text-white font-bold">Weather Details</p>
      </div>

      {/* temperature weather information */}

      <div className="flex items-center justify-around text-xl text-white backdrop-blur-sm bg-[#ffffff34] rounded-b-lg w-[45rem] m-4 rounded-lg">
        {/* first thing */}
        <div className="p-2 text-white flex flex-col items-center justify-center gap-4">
          <div className="backdrop-blur-xl bg-[#cdcdcd33]p-2 rounded-lg p-4">
            <p className="font-medium text-xl p-1">Humidity</p>
            <p className="p-1 font-semibold">78%</p>
          </div>
        </div>
        {/* 2nd thing  */}
        <div className="p-2 text-white flex flex-col items-center justify-center gap-4">
          <div className="backdrop-blur-xl bg-[#cdcdcd33]p-2 rounded-lg p-4">
            <p className="font-medium text-xl p-1">Wind speed</p>
            <p className="p-1 font-semibold">0.46473783</p>
          </div>
        </div>
        {/* 3rd thing  */}
        <div className="p-2 text-white flex flex-col items-center justify-center gap-4">
          <div className="backdrop-blur-xl bg-[#cdcdcd33]p-2 rounded-lg p-4">
            <p className="font-medium text-xl p-1">Wind Direction</p>
            <p className="p-1 font-semibold">0.46473783</p>
          </div>
        </div>
      </div>
    </div>
  );
}
