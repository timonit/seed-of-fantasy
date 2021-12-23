import { Property, Entity } from '../../src';

class DemoProp extends Property<string> {
  propertyName = 'Demo';

  protected changeValue(entity: Entity<any, any>, value: string): string {
    return `${value}-demo`;
  }
}

describe('Property', () => {
  let property: Property<any>;

  beforeEach(() => {
    property = new DemoProp('test');
  });

  it('Default value', () => {
    expect(property.getValue()).toBe('test');
  });

  it('Methods setValue and changeValue', () => {
    property.setValue({} as unknown as Entity<any, any>, 'demo');
    expect(property.getValue()).toBe('demo-demo');
  });
});
