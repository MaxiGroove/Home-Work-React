import React from "react";
import Header from "../../componetns/header/header";
import Filter from "../../componetns/filter/filter";
import Board from "../../componetns/board/board";
import { AppRoute } from "../../const";

const Main = () => {
    return (
        <React.Fragment>
            <Header mode={AppRoute.MAIN} />
            <section className="main__wrapper">
                <Filter mode={AppRoute.MAIN} />
                <Board mode={AppRoute.MAIN} />
            </section>
        </React.Fragment>
    )
}

export default Main;