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
        <div className="flex items-center justify-around my-6">
            {cities.map((city) => (
                <button className="text-white text-lg font-medium" key={city.id}>{city.title}</button>
            ))}
        </div>
    )
}
