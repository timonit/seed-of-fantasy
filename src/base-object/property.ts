import { Observer, Subscriber } from './subscruber';

/**
 * Свойство
 * Все состоит из свойств
 */
export abstract class Property<T>{
  abstract readonly propertyName: string;

  private data: T;

  private subscribers: Subscriber<T>[] = [];

  get value(): T {
    return this.data;
  }

  protected set value(value: T) {
    this.data = value;
    this.subscribers.forEach((sub) => sub.cb(value));
  }

  constructor(value: T) {
    this.data = value;
  }

  watch(cb: (value: T) => any): Observer {
    const subscriber = new Subscriber(cb);
    this.subscribers.push(subscriber);
    return subscriber.getObserver(this.subscribers);
  }
  
  abstract change(...args: any[]): void;
}
