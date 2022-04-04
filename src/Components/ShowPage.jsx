import React from 'react'
import './ShowPage.css'
import { useParams } from 'react-router-dom'

export default function ShowPage() {
    const { id } = useParams()

    const [anime, setAnime] = React.useState({});
    const fetchRender = async () => {
        try {
            const resAnime = await fetch('https://ghibliapi.herokuapp.com/films/' + id)
            const dataAnime = await resAnime.json()
            setAnime(dataAnime)
        }
        catch (err) {
            console.log(err)
        }
    }

    React.useEffect(() => { fetchRender() }, [])
    return (
        <div class="container">
            <div class="card">
                <div class="movie-info-container">
                    <div class="top">
                        <div class="img-1">
                            <img class="imgfile" src={anime.image} alt="" />
                        </div>
                        <div class="general-info">
                            <h2>{anime.title}</h2>
                            <div>
                                <span>Director:</span>
                                <span>{anime.director}</span>
                            </div>
                            <div>
                                <span>Producer:</span>
                                <span>{anime.producer}</span>
                            </div>
                            <div>
                                <span>Release Date:</span>
                                <span>{anime.release_date}</span>
                            </div>
                            <div>
                                <span>RT Score:</span>
                                <span>{anime.rt_score}</span>
                            </div>
                        </div>
                    </div>
                    <div class="movie-info">
                        <p>{anime.description}</p>
                    </div>
                </div>
                <div class="img-2">
                    <img class="imgfile" src={anime.movie_banner} alt="" />
                </div>
            </div>
        </div>
    )
}
