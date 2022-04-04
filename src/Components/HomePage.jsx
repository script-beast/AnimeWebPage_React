import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'

function HomePage() {

    const [animes, setAnimes] = React.useState([]);

    const fetchRender = async () => {
        try {
            const resAnime = await fetch('https://ghibliapi.herokuapp.com/films')
            const dataAnime = await resAnime.json()
            setAnimes(dataAnime)
        }
        catch (err) {
            console.log(err)
        }
    }

    React.useEffect(() => { fetchRender() }, [])

    const displayAnime = animes.map((anime) => {
        return (
            <Link to={`/show/${anime.id}`} key={anime.id} className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                        <img alt="" className="locandina" src={anime.image} />
                        <h1>{anime.title}</h1>
                        <h4>{anime.release_date}, {anime.director}</h4>
                        <span className="minutes">{anime.running_time} min</span>
                        <p className="type">Action, Crime, Fantasy</p>
                    </div>
                    <div className="movie_desc">
                        <p className="text">{anime.description.length > 250 ? `${anime.description.slice(0, 250)} ......` : anime.description}</p>
                    </div>
                    <div className="movie_social">
                        <ul>
                            <li><i className="material-icons">share</i></li>
                            <li><i className="material-icons"></i></li>
                            <li><i className="material-icons">chat_bubble</i></li>
                        </ul>
                    </div>
                </div>
                <div className="blur_back" style={{ background: `url(${anime.movie_banner})` }}></div>
            </Link>
        )
    })

    return (
        <div className="App">
            <span className='titlespan'>Anime</span>
            <p>{displayAnime}</p>
        </div>
    );
}

export default HomePage;