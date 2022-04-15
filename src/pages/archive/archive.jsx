import React from "react";
import Board from "../../componetns/board/board";
import Header from "../../componetns/header/header";

import { AppRoute } from "../../const";

const Archive = () => {
    return (
        <>
            <Header mode={AppRoute.ARCHIVE}/>
            <section className="main__wrapper">
                <Board mode={AppRoute.ARCHIVE}/>
            </section>
        </>
    )
}

export default Archive;
