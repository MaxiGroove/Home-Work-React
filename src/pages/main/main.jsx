import React from "react";
import Header from "../../componetns/header/header";
import Filter from "../../componetns/filter/filter";
import Board from "../../componetns/board/board";

const Main = ({events}) => {

    return (
        <React.Fragment>
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Board events={events} />
            </section>
        </React.Fragment>
    )
}

export default Main;