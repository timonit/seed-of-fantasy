import { Entity, Meta, Property } from '../../src';

class Density extends Property<number> {
  propertyName = 'Density';

  change(density: number): void {
    this.value = density;
  }
}

class Color extends Property<string> {
  propertyName = 'Color';

  change(color: string): void {
    this.value = color;
  }
}


interface LiquidMeta extends Meta {
}

class Liquid extends Entity<{liquid: LiquidMeta}> {
  entityName = 'Liquid';
}


interface WaterPaintMeta extends Meta {
  paintName: string;
}

class WaterPaint extends Liquid {
  entityName = 'Paint';
}

describe('Entity', function () {
  it('Should be created', () => {
    const file = new WaterPaint(
      {
        title: 'Madagaskar',
      },
      [
        
      ]
    );

    expect(file).toHaveProperty('entityName', 'film');
    expect(file.properties.duration.getValue()).toBe(0);
  });
});
