import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";
import { events } from "../../store/index";

import "./card.css"

const Card = ({event}) => {
    
    const { _id, theme, comment, date, archive, favorite } = event;

    const formatDate = moment(date).format('DD MMMM');

    const handleToArchive = (evt) => {
        evt.preventDefault();
        events.editEvent({
            ...event,
            id: _id,
            archive: !archive,
        })
    }

    const handleToFavorite = (evt) => {
        evt.preventDefault();
        events.editEvent({
            ...event,
            id: _id,
            favorite: !favorite,
        })
    }

    const handleDelete = (evt) => {
        evt.preventDefault();
        events.deleteEvent(_id)
    }

    return (
        <article className="card">
            <div className="card__form">
                <div className="card__inner">
                    <div className="card__control">
                        <Link
                            to={`/event/${_id}`}
                            type="button"
                            className="card__btn card__btn--edit"
                        >
                            Редактировать
                        </Link>
                        <Link
                            type="button"
                            className="card__btn card__btn--archive"
                            onClick={handleToArchive}
                        >
                            В архив
                        </Link>
                        <Link
                            type="button"
                            className={`card__btn card__btn--favorites ${favorite && 'favorite-on'}`}
                            onClick={handleToFavorite}
                        >
                            В избранное
                        </Link>
                        <Link
                            type="button"
                            className="card__btn card__btn--remove"
                            onClick={handleDelete}
                        >
                            Удалить
                        </Link>
                    </div>

                    <div className="card__textarea-wrap">
                        <p className="card__text--theme">{theme}</p>
                        <p className="card__text--comment">{comment}</p>
                    </div>

                    <div className="card__settings">
                        <span className="card__date">{formatDate}</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Card;