type Observer = {
  stopWatch: () => void;
}

class Subscriber<T> {
  id: number;

  cb: (value: T) => any;

  static index = 0;

  constructor(cb: (value: T) => any) {
    this.id = Subscriber.generateID();
    this.cb = cb;
  }

  static generateID(): number {
    return this.index++;
  }

  getObserver(subscribers: Subscriber<T>[]): Observer {
    return {
      stopWatch: () => {
        const index = subscribers.findIndex((sub) => sub.id === this.id);
        subscribers.splice(index, 1);
      }
    }
  }
}

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
