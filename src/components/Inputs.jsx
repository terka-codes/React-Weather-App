import { UilMapMarker, UilSearch } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className="flex w-fullitems-center items-center justify-between">

            <input 
                type="text" 
                placeholder="search for a city"
                className="h-10 rounded-full pl-4 text-gray-500 outline-none capitalize placeholder:lowercase w-2/3" 
            />
            <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-110" />
            <UilMapMarker size={25} className="text-white cursor-pointer transition ease-out hover:scale-110" />

            <div className="flex flex-row items-center justify-center gap-1" >
                <button name="metric" className="text-white text-xl font-light transition ease-out hover:scale-105">°C</button>
                <p className="text-white text-xl" >|</p>
                <button name="imprerial" className="text-white text-xl font-light transition ease-out hover:scale-105">°F</button>
            </div>

    </div>
  )
}

export default Inputs