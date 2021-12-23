export abstract class BaseEvent<D> {
  abstract name: string;

  data: D;

  constructor(data: D) {
    this.data = data;
  }
}
