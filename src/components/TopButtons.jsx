export default function TopButtons({ setQuery }) {

    const cities = [
        {
            id: 1,
            title: "London"
        },
        {
            id: 2,
            title: "Prague"
        },
        {
            id: 3,
            title: "Paris"
        },
        {
            id: 4,
            title: "Berlin"
        },
        {
            id: 5,
            title: "Tokyo"
        },
        {
            id: 6,
            title: "Rio"
        },
    ]

    return (
        <div className="flex items-center justify-between my-6">
            {cities.map(city => (
                <button
                    className="text-white text-lg font-medium mr-8"
                    key={city.id}
                    onClick={() => setQuery({ q: city.title })}
                >
                    {city.title}
                </button>
            ))
            }
            {/* ADD this later
            <button className="text-white text-lg font-medium">+ Add City</button> */}
        </div >
    )
}
