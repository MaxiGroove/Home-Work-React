import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";

const Event = ({ events }) => {
  const { id } = useParams();

  const history = useHistory();

  const { editEvent, addEvent, getEvent } = events;

  const [form, setForm] = useState({
    theme: '',
    comment: '',
    date: new Date()
  })

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value })
  }

  console.log('submit form', form);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (id) {
      editEvent({
        id: id,
        ...form,
        favorite: form.favorite,
        archive: form.archive,
      });
      history.push('/');
    } else {
      addEvent(form);
      history.push('/');
    }
  }

  useEffect(() => {
    if (id) {
      getEvent(id).then( result => setForm(result))
    }
  }, [id])


  const formatDate = moment(form.date).format('YYYY-MM-DDThh:mm');

  return (
    <form className="board__form" onSubmit={handleSubmit}>
      <h2 className="board__title">{id ? 'Редактирование события' : 'Добавление события'}</h2>

      <fieldset className="board__field board__field--theme">
        <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
        <textarea
          type="text"
          className="board__input board__input--theme"
          name="theme"
          defaultValue={form.theme}
          onChange={handleFieldChange}
          required
        ></textarea>
      </fieldset>

      <fieldset className="board__field board__field--comment">
        <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
        <textarea
          type="text"
          className="board__input board__input--comment"
          name="comment"
          defaultValue={form.comment}
          onChange={handleFieldChange}
          required
        ></textarea>
      </fieldset>

      <fieldset className="board__field board__field--date">
        <label htmlFor="date" className="board__label board__label--date">Дата:</label>
        <input
          type="datetime-local"
          className="board__input board__input--date"
          name="date"
          value={formatDate}
          onChange={handleFieldChange}
        />
      </fieldset>

      <div className="btns">
        <button
          type="submit"
          className="btn-submit"
          onClick={handleSubmit}
        >
          {id ? 'Сохранить' : 'Добавить'}
        </button>

        <button type="reset" className="btn-reset">Очистить</button>
      </div>
    </form>
  );
};

export default Event;


