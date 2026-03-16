import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
)

export default function TemperatureChart({ forecast }) {

    if (!forecast) return null

    const data = forecast.list.slice(0, 8)

    const labels = data.map(item => {
        const date = new Date(item.dt * 1000)
        return `${date.getHours()}:00`
    })

    const temps = data.map(item => item.main.temp)

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: "Temperature °C",
                data: temps,
                borderWidth: 2,
                tension: 0.4
            }
        ]
    }

    return (

        <div className="glass-card w-full max-w-md mt-10">
            <Line data={chartData} />
        </div>

    )
}