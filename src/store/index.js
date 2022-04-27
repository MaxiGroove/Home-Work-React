import { computed, makeAutoObservable, onBecomeObserved } from "mobx";
import { getEvents, addEvent, editEvent, deleteEvent, deleteArchiveEvents, getEvent } from "../api";
import moment from "moment";

class EventsStore {
  data = [];
  filtredData = [];

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true,
      archiveData: computed,
      notArchiveData: computed
    });

    onBecomeObserved(this, 'data', this.fetch);
  }

  get archiveData() {
    return this.data.filter(x => x.archive)
  }

  get notArchiveData() {
    return this.data.filter(x => !x.archive)
  }

  getEvent(id) {
    return getEvent(id);
  } 

  get pastData() {
    return this.data
      .filter(x => moment(x.date).isBefore(moment(), 'day') && !x.archive);
  }

  get todayData() {
    return this.data
      .filter(x => moment(x.date).isSame(moment(), 'day') && !x.archive);
  }

  get futureData() {
    return this.data
      .filter(x => moment(x.date).isAfter(moment(), 'day') && !x.archive);
  }

  get favoriteData() {
    return this.data
      .filter(x => x.favorite && !x.archive);
  }

  get sortNewDate() {
    return this.data.filter(x => !x.archive).sort((a, b) => a.date > b.date ? -1 : 1);
  }

  get sortOldDate() {
    return this.data.filter(x => !x.archive).sort((a, b) => a.date > b.date ? 1 : -1);
  }

  *fetch() {
    const response = yield getEvents();
    this.data = response;
    this.filtredData = response.filter(x => !x.archive)
  }

  *addEvent(data) {
    yield addEvent(data)
    yield this.fetch();
  }

  *editEvent(data) {
    yield editEvent(data);
    yield this.fetch();
  }

  *deleteEvent(id) {
    yield deleteEvent(id)
    yield this.fetch();
  }

  *deleteArchiveEvents(id) {
    yield deleteArchiveEvents(id);
    yield this.fetch();
  }
}



export const events = new EventsStore();