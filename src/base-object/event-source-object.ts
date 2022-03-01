import { EventEmitterList } from './event-emitter-list';
import { EventHandler, Unsubscribe } from './types';

export abstract class EventSourceObject<EL extends EventEmitterList> {
  protected eventList: EL;

  // subscribe(eventName: keyof EL, cb: EventHandler<any>): Unsubscribe {
  subscribe(eventName: keyof EL, cb: EventHandler<any>): Unsubscribe {
    return this.eventList[eventName].subscribe(cb);
  }

  emit(eventName: keyof EL, data: any): void {
    this.eventList[eventName].emit(data);
  }

  constructor(eventList: EL) {
    this.eventList = eventList;
  }
}
