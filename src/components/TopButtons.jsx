export default function TopButtons() {

    const cities = [
        {
            id: 1,
            title: "New York"
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
    ]

    return (
        <div className="flex items-center my-6">
            {cities.map(city => (
                <button className="text-white text-lg font-medium mr-8" key={city.id}>{city.title}</button>
            ))}
            <button className="text-white text-lg font-medium">+ Add City</button>
        </div>
    )
}
