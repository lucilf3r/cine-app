import Image from 'next/image'
const Search=({poster_path, title, release_date , overview})=>{
const imageAPI="http://image.tmdb.org/t/p/original"



    return(
        
            <div className="card">

                <img className="card-img" src={imageAPI+poster_path} alt="" />
                {console.log(poster_path)}
                <div className="movie-info">
                    <p>{title}</p>
                </div>
                <div className="overview">
                <p>{overview}</p>
                </div>
            </div>

    );
}

export default Search;