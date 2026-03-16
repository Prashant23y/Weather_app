import { useState, useEffect } from "react"

export default function FavoriteCities({ onSelectCity }) {

    const [cities, setCities] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cities")) || []
        setCities(saved)
    }, [])

    const addCity = (city) => {
        const updated = [...cities, city]
        setCities(updated)
        localStorage.setItem("cities", JSON.stringify(updated))
    }

    return (
        <div className="glass-card w-full max-w-md p-4">

            <h2 className="mb-3 text-lg">Favorite Cities</h2>

            <div className="flex flex-wrap gap-2">
                {cities.map((city, index) => (
                    <button
                        key={index}
                        onClick={() => onSelectCity(city)}
                        className="bg-white/20 px-3 py-1 rounded-lg"
                    >
                        {city}
                    </button>
                ))}
            </div>

        </div>
    )
}