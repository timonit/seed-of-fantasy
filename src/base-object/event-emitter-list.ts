import { EventEmitter } from './event-emitter';

export interface EventEmitterList {
  [p: string]: EventEmitter;
}
