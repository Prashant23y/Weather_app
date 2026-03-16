export default function WeatherDetails({ weather }) {

    if (!weather) return null

    return (

        <div className="grid grid-cols-2 gap-4 w-full max-w-md">

            <div className="glass-card text-center">
                <p className="opacity-70">Humidity</p>
                <p className="text-2xl">
                    {weather.main.humidity}%
                </p>
            </div>

            <div className="glass-card text-center">
                <p className="opacity-70">Wind</p>
                <p className="text-2xl">
                    {weather.wind.speed} km/h
                </p>
            </div>

        </div>

    )
}