import { BaseEvent, EventList } from '../../src';

class OneEvent extends BaseEvent<string> {
  name = 'one';
}

class TwoEvent extends BaseEvent<string> {
  name = 'two';
}

describe('PropertyList', () => {
  let instance: EventList;

  beforeEach(() => {
    instance = new EventList([new OneEvent('asd'), new TwoEvent('asd')]);
  });

  it('Define', () => {
  })
});
