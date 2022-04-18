import React from "react";
import Board from "../../componetns/board/board";
import Header from "../../componetns/header/header";

const Archive = () => {

    return (
        <React.Fragment>
            <Header />
            <section className="main__wrapper">
                <Board />
            </section>
        </React.Fragment>
    )
}

export default Archive;
