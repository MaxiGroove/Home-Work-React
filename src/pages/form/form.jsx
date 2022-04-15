import React from "react";
import Filter from "../../componetns/filter/filter";
import Header from "../../componetns/header/header";
import Event from "../../componetns/event/event";
import { AppRoute } from "../../const";

const Form = () => {
    return (
        <React.Fragment>
            <Header mode={AppRoute.MAIN} />
            <section className="main__wrapper">
                <Filter />
                <Event />
            </section>
        </React.Fragment>
    )
}

export default Form;