import { BaseEvent, EventEmitterList } from '../../src';

class OneEvent extends BaseEvent<string> {
  name = 'one';
}

class TwoEvent extends BaseEvent<string> {
  name = 'two';
}

describe('PropertyList', () => {
  let instance: EventEmitterList;

  beforeEach(() => {
    instance = new EventEmitterList([new OneEvent('asd'), new TwoEvent('asd')]);
  });

  it('Define', () => {
  })
});
