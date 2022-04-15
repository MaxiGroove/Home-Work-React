import React from "react";
import Sorting from "../sorting/sorting";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import { AppRoute } from "../../const";

const Board = ({mode}) => {
    return (
        <section className="board">
            {mode === AppRoute.MAIN ? <Sorting  /> : null}
            <div className="board__events">
                <Card />
            </div>
            {mode === AppRoute.MAIN ? <LoadMore /> :
                mode === AppRoute.ARCHIVE ? <LoadMore /> :
                null}
        </section>
    )
}

export default Board;