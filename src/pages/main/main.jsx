import React from "react";
import Header from "../../componetns/header/header";
import Filter from "../../componetns/filter/filter";
import Board from "../../componetns/board/board";
import { events } from "../../store";
import { observer } from "mobx-react-lite";

const Main = observer(() => {

    const { filtredData } = events
    
    return (
        <React.Fragment>
            <Header />
            <section className="main__wrapper">
                <Filter />
                <Board events={filtredData} />
            </section>
        </React.Fragment>
    )
})

export default Main;