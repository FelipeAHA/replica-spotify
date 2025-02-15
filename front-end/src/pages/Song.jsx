import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { artistArray } from "../../assets/database/artists"
import { songsArray } from "../../assets/database/songs"

const Song = () => {
    const { id } = useParams()

    const { image, name, duration, artist, audio, index } = songsArray.filter((currentSong) => currentSong.id === Number(id))[0]

    const artistObj = artistArray.filter((currentArtist) => currentArtist.name === artist)[0]

    const songsArrayFromArtist = songsArray.filter((currentSong) => currentSong.artist === artist)

    const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
    const randomIndex2 = Math.floor(Math.random() * (songsArrayFromArtist.length - 1))
    const randomIdFromArtist = songsArrayFromArtist[randomIndex].id
    const randomId2FromArtist = songsArrayFromArtist[randomIndex].id

    return (
        <div className="song">
            <div className="song__container">
                <div className="song__image-container">
                    <img src={image} alt={`Imagem da música ${name}`} />
                </div>
            </div>

            <div className="song__bar">
                <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
                    <img src={artistObj.image} alt={`Imagem do artista ${artist}`} width={75} height={75} />
                </Link>

                <Player duration={duration} randomIdFromArtist={randomIdFromArtist} randomId2FromArtist={randomId2FromArtist} audio={audio}/>

                <div>
                    <p className="song__name">{name}</p>
                    <p>{artist}</p>
                </div>
            </div>
        </div>
    )
}

export default Song