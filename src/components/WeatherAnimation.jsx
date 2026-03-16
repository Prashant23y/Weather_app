import Particles from "react-tsparticles"

export default function WeatherAnimation({ weather }) {

    if (!weather) return null

    const type = weather.weather[0].main

    let options = {}

    // 🌧 Rain
    if (type === "Rain") {
        options = {
            fullScreen: { enable: false },
            particles: {
                number: { value: 250 },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 2 },
                move: {
                    direction: "bottom",
                    enable: true,
                    speed: 15
                }
            }
        }
    }

    // ❄ Snow
    if (type === "Snow") {
        options = {
            fullScreen: { enable: false },
            particles: {
                number: { value: 150 },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.8 },
                size: { value: 4 },
                move: {
                    direction: "bottom",
                    enable: true,
                    speed: 2
                }
            }
        }
    }

    // ☁ Clouds
    if (type === "Clouds") {
        options = {
            fullScreen: { enable: false },
            particles: {
                number: { value: 20 },
                color: { value: "#ffffff" },
                opacity: { value: 0.15 },
                size: { value: 80 },
                move: {
                    direction: "right",
                    enable: true,
                    speed: 1
                }
            }
        }
    }

    return (
        <Particles
            options={options}
            style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: -1
            }}
        />
    )
}