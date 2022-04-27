import React from "react";
import Sorting from "../sorting/sorting";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import { AppRoute } from "../../const";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import DeleteEvt from "../delete-evt/delete-evt";
import NoEvent from "../no-events/no-events";

const Board = ({ events }) => {

    const [step, setStep] = React.useState(10);

    const handleLoadMore = () => {
        events.length >= step ? setStep(step + 5) : setStep(events.length);
    };

    const location = useLocation()
    
    return (
        <section className="board">
            {location.pathname === AppRoute.MAIN && <Sorting />}
            <div className="board__events">
                { events.slice(0, step).map(event => <Card event={event} key={event._id} />)}
            </div>
            <LoadMore event={handleLoadMore}/>
            {location.pathname === AppRoute.ARCHIVE && <DeleteEvt />}
        </section>
    )
}

export default Board;