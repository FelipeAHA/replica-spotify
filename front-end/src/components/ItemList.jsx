import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idpath }) => {
    const {pathname} = useLocation()
    const isHome = pathname === "/"
    const finalItems = isHome ? items : Infinity
    return (
        <div className="item-list">
            <div className="item-list__header">
                <h2>{title} populares</h2>
                {isHome ? <Link to={path} className="item-list_link">Mostrar tudo</Link> : <></>}
            </div>

            <div className="item-list__container">
                {itemsArray.filter((currentValue, index) => index < finalItems).map((currentArtist, index) => <SingleItem {...currentArtist} idpath={idpath} key={`${title}-${index}`} />)}
            </div>
        </div>
    )
}

export default ItemList