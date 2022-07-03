export type Observer = {
  stopWatch: () => void;
}

export class Subscriber<T> {
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
