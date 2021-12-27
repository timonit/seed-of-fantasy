import { BaseEvent } from './event';

export class EventList {
  list: {[p: string]: BaseEvent<any>} = {};

  addEvents(events: BaseEvent<any>[]) {
    events.forEach((event) => {
      this.list[event.name] = event;
    });
  }

  constructor(events?: BaseEvent<any>[]) {
    if (events) {
      this.addEvents(events);
    }
  }
}
