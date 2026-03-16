export default function CurrentWeather({ weather, addCity }) {

    if (!weather) return null

    return (

        <div className="glass-card text-center w-full max-w-md mt-6">

            <h1 className="text-4xl font-light">
                {weather.name}
            </h1>

            <p className="text-[110px] font-thin leading-none">
                {Math.round(weather.main.temp)}°
            </p>

            <p className="text-xl opacity-80 capitalize">
                {weather.weather[0].description}
            </p>

            <p className="opacity-70">
                H:{Math.round(weather.main.temp_max)}°
                L:{Math.round(weather.main.temp_min)}°
            </p>

            <button
                onClick={() => addCity(weather.name)}
                className="mt-4 bg-white/20 hover:bg-white/30 transition px-4 py-2 rounded-lg"
            >
                ⭐ Add to Favorites
            </button>

        </div>

    )
}