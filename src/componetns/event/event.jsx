import React from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru"

const Event = ({events}) => {
  const { id } = useParams();

  const arr = events.filter(item => item._id === id)

  // const { theme, comment, date } = arr[0];

  return (
    <form className="board__form">
      <h2 className="board__title">{id ? 'Редактирование события' : 'Добавление события'}</h2>

      <fieldset className="board__field board__field--theme">
        <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
        <textarea
          type="text"
          className="board__input board__input--theme"
          name="theme"
          required
        >{id && arr[0].theme}</textarea>
      </fieldset>

      <fieldset className="board__field board__field--comment">
        <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
        <textarea
          type="text"
          className="board__input board__input--comment"
          name="comment"
          required
        >{id && arr[0].comment}</textarea>
      </fieldset>

      <fieldset className="board__field board__field--date">
        <label htmlFor="date" className="board__label board__label--date">Дата:</label>
        <input
          type="datetime-local"
          className="board__input board__input--date"
          name="date"
          defaultValue={id && moment(arr[0].date).format('YYYY-MM-DDThh:mm')}
        />
      </fieldset>

      <div className="btns">
        <button type="submit" className="btn-submit">{id ? 'Сохранить' : 'Добавить'}</button>
        <button type="reset" className="btn-reset">Очистить</button>
      </div>
    </form>
  )
}

export default Event;