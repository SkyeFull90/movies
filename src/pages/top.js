import clientPromise from "../../lib/mongodb";


export default function Top ({movies}) {
    return (
        <div className="min-h-screen bg-cyan p-20">
            <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex flex-wrap sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://images.unsplash.com/photo-1685810062916-f14fdc0bfa64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt=" road" />
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        Top 100 Movies of All Time
                    </p>
                    <p className="text-slate-500 font-medium">
                        (According to Metacritic)
                    </p>
                    </div>
                </div>
            </div> 
                <div className="p-20 py-20">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {movies.map((movie) => (

                            <div className="mb-4">
                                <div className="card lg:card-side bg-base-100 shadow-xl">
                                    <figure> <img src={movie.poster} alt="poster" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{movie.title}</h2>
                                        <h3>{movie.metacritic}</h3>
                                        <p>{movie.plot}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Watch</button>
                                            <button className="btn btn-ghost">Trailer</button>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                   
        </div>                  
    )
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");

        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(100)
            .toArray();

        return {
            props: { movies: JSON.parse(JSON.stringify(movies)) },
        };
    } catch (e) {
        console.error(e);
    }
}