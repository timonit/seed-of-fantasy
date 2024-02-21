export abstract class Factory<T> {
  abstract create(...args: any[]): T;
}
