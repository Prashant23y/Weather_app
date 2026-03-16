export default function SkyBackground({ weather }) {

    if (!weather) return null

    const condition = weather.weather[0].main

    if (condition === "Clear") {

        return (

            <div className="absolute inset-0 overflow-hidden -z-10">

                <div className="
    absolute
    w-[400px]
    h-[400px]
    bg-yellow-400
    rounded-full
    blur-[150px]
    opacity-60
    animate-pulse
    top-[-100px]
    right-[-100px]
    "/>

            </div>

        )

    }

    if (condition === "Clouds") {

        return (

            <div className="absolute inset-0 -z-10 overflow-hidden">

                <div className="
    absolute
    w-[500px]
    h-[200px]
    bg-white/20
    rounded-full
    blur-2xl
    animate-[cloudMove_60s_linear_infinite]
    top-[100px]
    left-[-200px]
    "/>

            </div>

        )

    }

    if (condition === "Rain") {

        return (

            <div className="absolute inset-0 -z-10">

                <div className="
    absolute
    w-full
    h-full
    bg-gradient-to-b
    from-gray-600
    to-gray-900
    opacity-30
    "/>

            </div>

        )

    }

    return null

}