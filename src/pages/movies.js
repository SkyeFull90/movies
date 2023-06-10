import clientPromise from "../../lib/mongodb";

export default function Movies ({ movies }) {
    return (
        <div className="py-10 px-10">
            <h1>Top 20 Movies of All Time</h1>
            <p>(According to Metacritic)</p>
            <div className="py-10 px-10">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {movies.map((movie) => (
                        <div className="mb-4">
                            <div className="card lg:card-side bg-base-100 shadow-xl">
                                <figure><img src={movie.poster} alt="poster" width={200} height={200}/></figure>
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
    );
}   
export async function getServerSideProps() {
    try{
        const client = await clientPromise;
        const db = client.db("sample_mflix");
        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();
        return {
            props: {
                movies: JSON.parse(JSON.stringify(movies)),
            },
        };
    }
   
    catch (e) {
        console.error(e);
    }
}