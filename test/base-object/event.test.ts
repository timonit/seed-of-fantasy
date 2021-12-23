import { BaseEvent } from '../../src';

class DemoEvent extends BaseEvent<string> {
  name = 'demo';
}

describe('Property', () => {
  let event: BaseEvent<any>;
  const initialData = 'initial';

  beforeEach(() => {
    event = new DemoEvent(initialData);
  });

  it('Default value', () => {
    expect(event.data).toBe(initialData);
  });
});
