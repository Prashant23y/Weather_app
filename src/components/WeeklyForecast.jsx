import { WiDaySunny, WiCloud, WiRain } from "react-icons/wi"

export default function WeeklyForecast({ forecast }) {

    if (!forecast) return null

    const dailyData = forecast.list.filter((item, index) => index % 8 === 0)

    return (

        <div className="
        mt-10
        w-full
        max-w-md
        glass-card">

            <h2 className="mb-4 text-lg opacity-80">
                7-Day Forecast
            </h2>

            {dailyData.map((day, index) => {

                const date = new Date(day.dt * 1000)
                const dayName = date.toLocaleDateString("en-US", { weekday: "short" })

                const weather = day.weather[0].main

                let Icon = WiCloud

                if (weather === "Clear") Icon = WiDaySunny
                if (weather === "Rain") Icon = WiRain

                return (

                    <div
                        key={index}
                        className="
                        flex
                        justify-between
                        items-center
                        py-3
                        border-b
                        border-white/20">

                        <p>{dayName}</p>

                        <Icon size={30} />

                        <p>{Math.round(day.main.temp)}°</p>

                    </div>

                )

            })}

        </div>

    )
}