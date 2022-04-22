import React from "react";
import Sorting from "../sorting/sorting";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Board = () => {

    const location = useLocation()

    return (
        <section className="board">
            {location.pathname === AppRoute.MAIN ? <Sorting  /> : null}
            <div className="board__events">
                <Card />
            </div>
            {location.pathname === AppRoute.MAIN ? <LoadMore /> :
                location.pathname === AppRoute.ARCHIVE ? <LoadMore /> :
                null}
        </section>
    )
}

export default Board;