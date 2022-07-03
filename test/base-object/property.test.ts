import { Property } from '../../src';

class Color extends Property<string> {
  propertyName = 'Color';

  change(value: string): void {
    this.value = value;;
  }
}

describe('Property', () => {
  let color: Property<any>;

  beforeEach(() => {
    color = new Color('red');
  });

  it('Default value', () => {
    expect(color.value).toBe('red');
  });

  it('Method change', () => {
    color.change('green');
    expect(color.value).toBe('green');
  });
});
