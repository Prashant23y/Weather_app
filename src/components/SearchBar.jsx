import { useState } from "react"

export default function SearchBar({ onSearch }) {

    const [city, setCity] = useState("")

    const handleSearch = () => {

        if (city.trim()) {
            onSearch(city)
            setCity("")
        }

    }

    return (

        <div className="glass-card flex gap-3 w-full max-w-md">

            <input
                type="text"
                placeholder="Search city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="flex-1 bg-transparent outline-none"
            />

            <button
                onClick={handleSearch}
                className="bg-white/20 px-4 py-2 rounded-lg"
            >
                Search
            </button>

        </div>

    )
}