import React from "react";
import Board from "../../componetns/board/board";
import Header from "../../componetns/header/header";

const Archive = ({ events }) => {

    const archiveEvents = events.filter(x => x.archive);

    return (
        <React.Fragment>
            <Header />
            <section className="main__wrapper">
                <Board events={archiveEvents} />
            </section>
        </React.Fragment>
    )
}

export default Archive;
