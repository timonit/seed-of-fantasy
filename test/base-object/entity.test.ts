import { Entity, Meta, Property, PropertyList } from '../../src';

class Duration extends Property<number> {
  propertyName = 'duration';
}

interface FilmMeta extends Meta {
  title: string;
}

interface FilmPropList extends PropertyList {
  duration: Duration;
}

class FilmEntity extends Entity<FilmPropList, FilmMeta> {
  entityName = 'film';
}

describe('Entity', function () {
  it('Should be created', () => {
    const file = new FilmEntity(
      {
        duration: new Duration(0),
      },
      {
        title: 'Madagaskar',
      },
    );

    expect(file).toHaveProperty('entityName', 'film');
    expect(file.properties.duration.getValue()).toBe(0);
  })
});
