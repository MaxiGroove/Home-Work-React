import React from "react";
import Sorting from "../sorting/sorting";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Board = ({ events }) => {

    const location = useLocation()

    return (
        <section className="board">
            {location.pathname === AppRoute.MAIN && <Sorting />}
            <div className="board__events">
                {events.map(event => <Card {...event} key={event.id} />)}
            </div>
            <LoadMore />
        </section>
    )
}

export default Board;