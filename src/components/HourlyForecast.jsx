export default function HourlyForecast({ forecast }) {

    if (!forecast) return null

    const hourlyData = forecast.list.slice(0, 8)

    return (

        <div className="
  mt-10
  w-full
  max-w-md
  glass-card">

            <h2 className="mb-4 text-lg opacity-80">
                Hourly Forecast
            </h2>

            <div className="
  flex
  gap-4
  overflow-x-auto
  pb-2">

                {hourlyData.map((hour, index) => {

                    const time = new Date(hour.dt * 1000)
                    const hourLabel = time.getHours()

                    return (

                        <div
                            key={index}
                            className="
     flex
     flex-col
     items-center
     min-w-[70px]">

                            <p className="opacity-80">
                                {hourLabel}:00
                            </p>

                            <p className="text-2xl">
                                {Math.round(hour.main.temp)}°
                            </p>

                        </div>

                    )

                })}

            </div>

        </div>

    )
}