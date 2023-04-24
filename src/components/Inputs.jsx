import { UilMapMarker, UilSearch } from '@iconscout/react-unicons'
import { useState } from "react"

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("")

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city })
    }
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        setQuery({ lat: latitude, lon: longitude })
      })
    }
  }

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit) setUnits(selectedUnit)
  }

  return (
    <div className="flex w-full items-center items-center justify-between">

      <input
        value={city}
        onChange={(e) => setCity(e.currentTarget.value)}
        type="text"
        placeholder="search for a city"
        className="h-10 rounded-full pl-4 text-gray-500 outline-none capitalize placeholder:lowercase placeholder:font-light w-2/3"
      />
      <UilSearch
        size={25}
        className="text-white cursor-pointer transition ease-out hover:scale-110"
        onClick={handleSearchClick}
      />
      <UilMapMarker
        size={25}
        className="text-white cursor-pointer transition ease-out hover:scale-110"
        onClick={handleLocationClick}
      />

      <div className="flex flex-row items-center justify-center gap-1" >

        <button
          name="metric"
          className="text-white text-xl font-light transition ease-out hover:scale-105"
          onClick={handleUnitChange}
        >
          °C
        </button>
        <p className="text-white text-xl">|</p>
        <button
          name="imperial"
          className="text-white text-xl font-light transition ease-out hover:scale-105"
          onClick={handleUnitChange}
        >
          °F
        </button>


      </div>

    </div>
  )
}

export default Inputs