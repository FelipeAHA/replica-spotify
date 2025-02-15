import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../../assets/database/artists";
import { songsArray } from "../../assets/database/songs";

const Main = ({type}) => {
    return (
        <div className="main">
            {type === "artists" || type === undefined ? <ItemList title="Artistas" items={8} itemsArray={artistArray} path="/artists" idpath="/artist"/> : <></>}

            {type === "songs" || type === undefined ? <ItemList title="Músicas" items={16} itemsArray={songsArray} path="/songs" idpath="/song"/> : <></>}
        </div>
    )
}

export default Main