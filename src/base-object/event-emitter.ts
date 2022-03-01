import { EventHandler, Unsubscribe } from './types';

const unsubscribeFactory = <T>(handler: EventHandler<T>, list: EventHandler<T>[]) => {
  return () => {
    list.slice(list.indexOf(handler), 1)
  };
}

export class EventEmitter<T = any> {
  subscribers: EventHandler<T>[] = [];

  subscribe(cb: EventHandler<T>): Unsubscribe {
    this.subscribers.push(cb);
    return unsubscribeFactory(cb, this.subscribers);
  };

  emit(data: T): void {
    this.subscribers.forEach((subscriber) => {
      subscriber(data);
    });
  };
}
